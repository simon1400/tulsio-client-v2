import { FC, useState } from "react";
import Label from "components/Label";
import { ArticleWrap } from "./styles";
import { Typography } from "@mui/material";
import { useOnMountUnsafe } from "helpers/useOnMountUnsaf";
import { choiceBackground } from "helpers/choiseBackground";

const APP_API = process.env.APP_API;

export interface ILabel {
  title: string;
  slug: string;
  color: string;
}

interface ArticleShortProps {
  link: string;
  image: string;
  background?: string;
  label?: ILabel | ILabel[];
  title: string;
  text?: string;
  showShortImg?: boolean;
}

const ArticleShort: FC<ArticleShortProps> = ({
  link,
  image,
  title,
  background,
  showShortImg = true,
  text = "",
  label = undefined,
}) => {
  const [imgUrl, setImgUrl] = useState<string>('/assets/placeholder.svg')
  const [size] = useState<string>("resize=1000x1000");

  const {convert, color} = choiceBackground(background)

  useOnMountUnsafe(() => {
    if (typeof image === "object" && image) {
      if (image["attributes"]) {
        setImgUrl(`${APP_API}${image["attributes"]["url"]}?format=webp&${size}`);
      } else {
        setImgUrl(`${APP_API}${image["url"]}?format=webp&${size}`);
      }
    } else if (image !== undefined) {
      setImgUrl(image + `?format=webp&${size}`);
    }
    
    
  })

  return (
    <ArticleWrap background={convert} color={color} href={link} passHref>
      <div className="img-wrap">
        <div
          className="img-art"
          style={showShortImg ? { backgroundImage: `url(${imgUrl})` } : {}}
        />
      </div>

      <div className="content-wrap-art">
        <div>
          <Typography variant="h2">
            <span>{title}</span>
          </Typography>
          {!!text.length && (
            <Typography
              variant="body1"
              component="div"
              className="article-short-content"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
        <div className="label-wrap">
          {!!label && !Array.isArray(label) && (
            <Label data={label} color={color} />
          )}
          {!!label &&
            Array.isArray(label) &&
            label.map((item, idx) => (
              <Label color={color} key={idx} data={item} />
            ))}
        </div>
      </div>
    </ArticleWrap>
  );
};

export default ArticleShort;
