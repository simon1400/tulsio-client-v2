import Image from "next/image";
import { FC } from "react";
import { LinkS, PodcastLinkS } from "./styles";

const APP_API = process.env.APP_API;

interface PodcastLink {
  data: IPodcastLinkItem [];
}

interface IPodcastLinkItem {
  name: string;
  url: string;
  logo: {
    data: {
      attributes: {
        url: string
      }
    }
  }
}

const PodcastLink: FC<PodcastLink> = ({ data }) => {

  return (
    <PodcastLinkS>
      <div>
        <span>Poslouchejte na </span>
        <ul>
          {data.map((item:IPodcastLinkItem, idx: number) => (
            <li key={idx}>
              <LinkS href={item.url} passHref>
                <Image
                  src={APP_API + item.logo.data?.attributes?.url }
                  width="33"
                  height="33"
                  alt=""
                />
              </LinkS>
            </li>
          ))}
        </ul>
      </div>
      
    </PodcastLinkS>
  );
};

export default PodcastLink;
