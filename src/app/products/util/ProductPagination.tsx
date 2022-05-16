import * as React from "react";
import usePagination from "@mui/material/usePagination";
import { styled } from "@mui/material/styles";
import "./Pagination.css";
const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

export default function UsePagination(props: {
  count: number | undefined;
  page: number | undefined;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}) {
  const { count, page, onChange } = props;
  const { items } = usePagination({
    count: count,
    page: page,
    onChange: onChange,
    boundaryCount: 1,
    siblingCount: 1,
    showFirstButton: true,
    showLastButton: true,
    hideNextButton: true,
    hidePrevButton: true,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                className="pagination-btn"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  color: selected ? "#4460F7" : "#1A1B1D",
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" className="pagination-btn" {...item}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
