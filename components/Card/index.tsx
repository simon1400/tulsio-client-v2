import Image from "next/image";
import { getStrapiURL } from "lib/api";
import { Container, Grid, Typography } from "@mui/material";
import { CardS } from "./styles";
import AngleRight from "/public/assets/angle-right.svg";
import Link from "next/link";
import ColorLabel from "components/ColorLabel";
import { FC } from "react";
import { IImageRoot } from "types/image";
import Price from "components/Price";
import Rating from "components/Rating";

export interface ICardItem {
  title: string;
  slug: string;
  images: {
    data: {
      attributes: {
        url: string
      }
    }[]
  };
  price: any;
  labels: {
    data: {
      attributes: {
        color: string;
        title: string;
      };
    }[];
  };
  sellers: {
    data: {
      attributes: {
        rating: number;
      };
    }[];
  };
}

const Card: FC<{ product: ICardItem }> = ({ product }) => {
  console.log('url:', product.images.data[0])
  const imageUrl = getStrapiURL(product.images.data[0].attributes.url);


  return (
    <CardS>
      <div className="img-wrap">
        {imageUrl ? (
          <Image src={imageUrl} fill alt={product.title} />
        ) : (
          <Image src="/assets/placeholder.svg" fill alt={product.title} />
        )}

        <div className="label-wrap">
          <ColorLabel labels={product.labels.data} direction="column" />
        </div>
      </div>
      <div className="card-content">
        <Typography variant="h3">{product.title}</Typography>
        <Rating showNumber={false} rating={product.sellers.data[0].attributes.rating} />
        <div className="card-control">
          <Typography>{product.price} Kč</Typography>
          <Link href={`/product/${product.slug}`}>
            <AngleRight />
          </Link>
        </div>
      </div>
    </CardS>
  );
};

export default Card;
