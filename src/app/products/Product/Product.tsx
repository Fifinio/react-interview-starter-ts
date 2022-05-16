import { IProduct } from "../../../interfaces/Product";
import { ProductModal } from "./ProductModal";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Rating,
  CardMedia,
  Dialog,
  IconButton,
  Paper,
} from "@mui/material";
import { Icon } from "../../Icon";
import React, { useState } from "react";
import "./Product.css";

export const Product = (props: { product: IProduct }) => {
  const [open, setOpen] = useState(false);

  const product = props.product;
  if (!product) return null;
  const { id, name, description, active, promo, rating, image } = product;
  return (
    <Card className="product">
      {promo ? (
        <Paper elevation={1} className="promo">
          Promo
        </Paper>
      ) : null}
      {active ? (
        <CardMedia component="img" image={image} />
      ) : (
        <CardMedia className="inactive" component="img" image={image} />
      )}
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Rating
            value={rating}
            readOnly
            icon={<Icon icon="star-filled" />}
            emptyIcon={<Icon icon="star" />}
          />
        </CardContent>
      </CardActionArea>
      {active ? (
        <>
          {/* on click of the button setOpen to true */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(true);
              return undefined;
            }}
          >
            Show details
          </Button>
          <Dialog
            sx={{
              borderRadius: "1em",
              overflow: "hidden",
            }}
            open={open}
            onClose={() => {
              setOpen(false);
              return undefined;
            }}
          >
            <ProductModal product={props.product}>
              <IconButton
                aria-label="close"
                onClick={() => {
                  setOpen(false);
                  return undefined;
                }}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <Icon icon="close" />
              </IconButton>
            </ProductModal>
          </Dialog>
        </>
      ) : (
        <Button variant="contained" disabled color="secondary">
          Unavailable
        </Button>
      )}
    </Card>
  );
};
