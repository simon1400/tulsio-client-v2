import { Typography, Container, Grid } from "@mui/material";
import { ProductTopS } from "./styled";
import Button from "components/Button";
import Image from "components/Image";
import ColorLabel from "components/ColorLabel";
import Price from "components/Price";
import Rating from "components/Rating";
import { FC } from "react";
import { IImageRoot } from "types/image";
import Link from "next/link";
import { ISellerItem } from "components/Seller";

const APP_API = process.env.APP_API;

export interface IProductTopItem {
  title: string;
  slug: string;
  description: string;
  images: IImageRoot;
  link: string;
  shopCategories: {
    data: {
      attributes: {
        title: string;
        slug: string;
      };
    }[];
  };
  sellers: {
    data: {
      attributes: ISellerItem;
    }[];
  };
  customId: string;
  availability: boolean;
  brand: string;
  gtin: string;
  mpn: string;
  price: number;
  labels: {
    data: {
      attributes: {
        title: string;
        color: string;
      };
    }[];
  };
}

const ProductTop: FC<{ product: IProductTopItem }> = ({ product }) => {
  return (
    <>
      <ProductTopS>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Typography variant="h1" marginBottom={2}>
              {product.title}
            </Typography>
            <ColorLabel labels={product.labels.data} direction="row" />

            <Rating
              rating={product.sellers.data[0].attributes.rating}
              marginTop={30}
              marginBottom={30}
            ></Rating>
            <Typography>{product.description}</Typography>
            <div className="bottom" style={{ marginTop: "20px" }}>
              <Price
                price={product.price}
                availability={product.availability}
              />
              <Link href={product.link}>
                <Button>koupit na {product.brand}</Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </ProductTopS>
    </>
  );
};

export default ProductTop;
