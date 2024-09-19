import { BreadcrumbsS } from "./styles"
import Link from "next/link";
import { FC } from "react";
import Chevron from 'public/icons/chevron.svg'
import { SvgIcon } from "@mui/material";

export interface IBreadcrumbProduct {
  title: string
  slug: string
}

export interface IBreadcrumb {
  title: string;
  slug: string;
}

export interface IBreadcrumbs {
  category: IBreadcrumb
  color: string
  product?: IBreadcrumbProduct
  categoryLabel: string
}

const Breadcrumbs: FC<IBreadcrumbs> = ({
  category,
  color,
  product,
  categoryLabel
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
      <Link href="/">Tulsio</Link>
      <Link href={'/catalog'}>{categoryLabel}</Link>
      <Link href={'/'+category?.slug}>{category?.title}</Link>
      <Link href={'/product/'+product?.slug}>{product?.title}</Link>

    </BreadcrumbsS>
  )
}

export default Breadcrumbs