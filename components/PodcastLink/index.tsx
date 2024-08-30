import Image from "next/image";
import { FC } from "react";
import { LinkS, PodcastLinkS } from "./styles";

const APP_API = process.env.APP_API;

interface PodcastLink {
  data: any;
}

const PodcastLink: FC<PodcastLink> = ({ data }) => {

  const logo= data.articles?.data.attributes.podcastslink.item;

  return (
    <PodcastLinkS>
      <ul>
        {data.map((item: any, idx: number) => (
          <li key={idx}>
            <LinkS href={item.link} passHref>
              <Image
                src={APP_API + item.icon?.data.attributes.url}
                width="21"
                height="21"
                alt=""
              />
            </LinkS>
          </li>
        ))}
      </ul>
    </PodcastLinkS>
  );
};

export default PodcastLink;
