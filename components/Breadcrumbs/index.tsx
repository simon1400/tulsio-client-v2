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
}

const Breadcrumbs: FC<IBreadcrumbs> = ({
  category
}) => {
  return (
    <BreadcrumbsS separator={
      <SvgIcon 
        component={Chevron} 
        sx={{
          fill: 'rgba(255, 255, 255, 0.45)',
          transform: 'rotate(-95deg)'
        }} 
        fontSize="medium" />
      }
    >
      <Link href="/blog">Blog</Link>
      <Link href={'/'+category.slug}>{category.title}</Link>
    </BreadcrumbsS>
  )
}

export default Breadcrumbs