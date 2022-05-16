import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppRoute } from "routing/AppRoute.enum";
import { Product } from "./Product/Product";
import {
  IProduct,
  ISearchParams,
  IProductsMeta,
} from "../../interfaces/Product";
import {
  OutlinedInput,
  Box,
  Typography,
  Checkbox,
  FormGroup,
  InputAdornment,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Icon } from "../Icon";
import SimplePopper from "./util/Popper";
import ProductPagination from "./util/ProductPagination";
import "./Products.css";

export const Products = () => {
  const [user, setUser] = useState<string>("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsMeta, setProductsMeta] = useState<IProductsMeta>();
  const [searchParams, setSearchParams] = useState<ISearchParams>({
    active: false,
    promo: false,
    search: "",
    page: 1,
  });
  const [loading, setLoading] = useState(true);

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setSearchParams({ ...searchParams, page: value });
  };

  const handleChange = (e: {
    target: { name: string; value: string | boolean };
  }) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };
  const handleCheckbox = (e: {
    target: { name: string; checked: boolean };
  }) => {
    const { name, checked } = e.target;
    setSearchParams({ ...searchParams, [name]: checked });
  };

  const getProducts = async (searchParams?: ISearchParams) => {
    setLoading(true);
    let url = "https://join-tsh-api-staging.herokuapp.com/products?limit=8";
    if (searchParams) {
      const { search, active, promo, page } = searchParams;
      search ? (url += `&search=${search}`) : null;
      active ? (url += `&active=${active}`) : null;
      promo ? (url += `&promo=${promo}`) : null; //I don't really know if I need to exclude inactive if promo is true so I'm not doing that
      page ? (url += `&page=${page}`) : null;
    }
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.items);
        setProductsMeta({ ...data.meta });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      getProducts(searchParams);
    }, 400); // wait before calling to save resources and costs (400ms seemed enough and didn't impact experience)

    return () => clearTimeout(delayDebounceFn);
  }, [searchParams]);

  return (
    <>
      <div className="topBar">
        <header>
          <p>join.tsh.io</p>
          <Box className="searchBox">
            <OutlinedInput
              type="search"
              placeholder="Search"
              name="search"
              onChange={handleChange}
              value={searchParams.search}
              endAdornment={
                <InputAdornment position="end">
                  <Icon icon="search" />
                </InputAdornment>
              }
            />

            <FormGroup
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                minWidth: "maxContent",
              }}
            >
              <Checkbox
                icon={<Icon icon="checkbox" />}
                checkedIcon={<Icon icon="checkbox-checked" />}
                id="active"
                checked={searchParams.active}
                name="active"
                onChange={handleCheckbox}
              />
              <label htmlFor="active">Active</label>

              <Checkbox
                icon={<Icon icon="checkbox" />}
                checkedIcon={<Icon icon="checkbox-checked" />}
                id="promo"
                name="promo"
                checked={searchParams.promo}
                onChange={handleCheckbox}
              />
              <label htmlFor="promo">Promo</label>
            </FormGroup>
          </Box>
          {user ? (
            <SimplePopper>
              <Link to={AppRoute.Home}>Log out</Link>
            </SimplePopper>
          ) : (
            <Link to={AppRoute.Login}>
              <Button
                sx={{ textTransform: "none" }}
                className="btn-secondary"
                variant="outlined"
              >
                Log in
              </Button>
            </Link>
          )}
        </header>
      </div>

      {loading ? (
        <CircularProgress />
      ) : products.length > 0 ? (
        <div className="products product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="products empty">
          <Paper>
            <Icon icon="shopping-bag" />
            <Typography>Oops it's empty here</Typography>
            <Typography className="text-lighten">
              There are no products on the list
            </Typography>
          </Paper>
        </div>
      )}
      {productsMeta && products.length > 0 ? (
        <ProductPagination
          count={productsMeta.totalPages}
          page={searchParams.page}
          onChange={handlePagination}
        />
      ) : null}
    </>
  );
};
