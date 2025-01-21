declare module "react-responsive-masonry" {
  import { ReactNode } from "react";

  export interface ResponsiveMasonryProps {
    children: ReactNode;
    columnsCountBreakPoints: Record<number, number>;
  }

  export function ResponsiveMasonry(props: ResponsiveMasonryProps): JSX.Element;

  export interface MasonryProps {
    children: ReactNode;
    columnsCount?: number;
    gutter?: string | number;
  }

  export default function Masonry(props: MasonryProps): JSX.Element;
}