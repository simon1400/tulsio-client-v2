import Image from "next/image"
import { Container, Grid, Typography } from "@mui/material";
import { CardS } from "./styles"
import AngleRight from '/public/assets/angle-right.svg'
import Link from "next/link"
import ColorLabel from "components/ColorLabel"
import { FC } from "react"
import { IImageRoot } from "types/image"
import Price from "components/Price";

export interface ICardItem {
  title: string
  slug: string
  images: IImageRoot
  price: any
  labels: {
    data: {
      attributes: {
        color: string
        title: string
      }
    }[]
  }
}

const Card: FC<{product: ICardItem}> = ({product}) => {

  const imageUrl = product.images?.data?.[0]?.attributes?.url 
    ? `${process.env.APP_API}${product.images.data[0].attributes.url}`
    : null;


  return (
    <CardS>
      <div className="img-wrap">
        {imageUrl ? (
          <Image
            src={imageUrl}
            fill
            alt={product.title}
          />
        ) : (
          <p>No image available</p>
        )}

        <div className="label-wrap">
          <ColorLabel labels={product.labels.data} direction="column" />
        </div>
      </div>
      <div className="card-content">
        <Typography variant="h3">{product.title}</Typography>
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
