import { IProduct } from "../../../interfaces/Product";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

// child is responsible for being the close button
export const ProductModal = (props: { product: IProduct; children: any }) => {
  const product = props.product;
  if (!product) return null;
  const { id, name, description, active, promo, rating, image } = product;
  return (
    <Card
      sx={{
        position: "relative",
        minWidth: 288,
      }}
      className="productModal"
    >
      {props.children}
      <CardMedia component="img" height="300" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
