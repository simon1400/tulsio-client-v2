import { BreadcrumbsS } from "./styles"
import Link from "next/link";
import { FC } from "react";
import Chevron from 'public/icons/chevron.svg'
import { SvgIcon } from "@mui/material";

export interface IBreadcrumb {
  title: string;
  slug: string;
}

export interface IBreadcrumbs {
  category: IBreadcrumb
  color: string;
}

const Breadcrumbs: FC<IBreadcrumbs> = ({
  category,
  color
}) => {
  return (
    <BreadcrumbsS color={color} separator={
      <SvgIcon 
        component={Chevron} 
        sx={{
          fill: color,
          transform: 'rotate(-90deg)'
        }} 
        fontSize="medium" />
      }
    >
      <Link href="/blog">Blog</Link>
      <Link href={'/'+category?.slug}>{category?.title}</Link>
    </BreadcrumbsS>
  )
}

export default Breadcrumbs