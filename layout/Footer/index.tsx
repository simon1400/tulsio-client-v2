import { useQuery } from "@apollo/client";
import navFooter from "../../queries/navFooter";
import { FooterS } from "./styles";
import Newsletter from "components/Newsletter";
import SocialNav from "components/SocialNav";
import Nav from "components/Nav";
import { useRouter } from "next/router";
import { SyntheticEvent } from "react";

const Footer = () => {
  const router = useRouter();
  const { loading, data } = useQuery(navFooter, {
    variables: {
      locale: router.locale,
    },
  });

  if (loading) {
    return <></>;
  }

  const transformData = data.navigation.data.attributes.footer.item.map(
    (item: any, idx: number) => ({
      title: item.name,
      slug: item.link,
    })
  );

  const handleNav = (e: SyntheticEvent, slug: string) => {
    e.preventDefault();
    router.push(slug);
  };

  return (
    <>
      <Newsletter />
      <FooterS>
        <Nav data={transformData} handle={handleNav} />
        <SocialNav data={data} loading={loading} />
      </FooterS>
    </>
  );
};

export default Footer;
