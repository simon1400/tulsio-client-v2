import { Typography } from "@mui/material";
import { DescriptionS } from "./styled";
import { IImageRoot } from "types/image";
import Rating from "components/Rating";
import { FC } from "react";
import { Grid } from "@mui/material";
import Button from "components/Button";
import Link from "next/link";

export interface IDescription {
  title: string;
  slug: string;
  logo: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
  description: string;
  rating: string;
  web: string;
  shopCategories: {
    data: {
      attributes: {
        title: string;
        slug: string;
      };
    }[];
  };
  galery: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  products: {
    data: {
      attributes: {
        title: string;
        slug: string;
        images: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        price: any;
        labels: {
          data: {
            attributes: {
              color: string;
              title: string;
            };
          };
        };
      };
    }[];
  };
}

const Description: FC<{ description: IDescription }> = ({ description }) => {
  return (
    <DescriptionS>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <div className="img-wrap"></div>
          <div className="content-wrap-art">
            <div className="content-top">
              <Typography variant="h2">
                O prodejci {description.title}
              </Typography>
              <Rating rating={description.rating} />
            </div>
            <Typography>{description.description}</Typography>
            <div className="content-bottom">
              <Link href={description.web}>
                <Button>{description.title}</Button>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </DescriptionS>
  );
};

export default Description;
