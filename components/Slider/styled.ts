import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const SliderWrapS = styled.div(({theme}) => `
  > div {
    border-radius: ${theme.borderRadius['base']};
    ${theme.breakpoints.down('xxl')} {
      border-radius: ${theme.borderRadius['xxl']};
    }
    ${theme.breakpoints.down('xl')} {
      border-radius: ${theme.borderRadius['xl']};
    }
    ${theme.breakpoints.down('lg')} {
      border-radius: ${theme.borderRadius['lg']};
    }
    ${theme.breakpoints.down('sm')} {
      border-radius: ${theme.borderRadius['sm']};
    }
    .swiper-wrapper{
      > div{
        padding-top: 100%;
        img{
          object-fit: cover;
        }
      }
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        width: 18px;
        height: 18px;
        background-color: rgba(255, 255, 255, 0.3);
        &.swiper-pagination-bullet-active-main{
          background-color: ${theme.palette.primary.main};
        }
      }
    }
  }
`)