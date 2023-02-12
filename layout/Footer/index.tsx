import { useQuery } from "@apollo/client";
import navFooter from "../../queries/navFooter";
import { FooterS } from "./styles";
import Newsletter from "components/Newsletter";
import SocialNav from "components/SocialNav";
import Nav from "components/Nav";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const Footer = () => {
  const { loading, data } = useQuery(navFooter);

  const router = useRouter();

  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (data?.navigation) {
      if (data.navigation.data.attributes.footer.item.length) {
        const idx = data.navigation.data.attributes.footer.item.findIndex(
          (el: any) => el.link === router.asPath
        );
        setValue(idx >= 0 ? idx : false);
      }
    }
  }, [data, router]);

  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  if (loading) {
    return <></>;
  }

  const transformData = data.navigation.data.attributes.footer.item.map(
    (item: any, idx: number) => ({
      title: item.name,
      slug: "/" + item.link,
    })
  );

  const handleNav = (e: SyntheticEvent, idx: number) => {
    setValue(idx);
    router.push(transformData[idx].slug);
  };

  return (
    <>
      <Newsletter />
      <FooterS>
        <Nav
          data={transformData}
          handle={handleNav}
          value={value}
          orientation={md ? "vertical" : "horizontal"}
        />
        <SocialNav data={data} loading={loading} type="socNav" />
      </FooterS>
    </>
  );
};

export default Footer;
