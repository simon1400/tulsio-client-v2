import styled from "@emotion/styled";
import Link from "next/link";

export const SocialNavS = styled.nav(({theme}) => `
  ul{
    margin: 0;
    padding-left: 0;
    display: block;
    li{
      display: inline-block;
      list-style-type: none;
      &:not(:first-of-type) {
        margin-left: 5px;
      }
      &:not(:last-of-type) {
        margin-right: 5px;
      }

    }
  }
`)

export const LinkS = styled(Link)<{background: string}>(({background}) => `
  background: ${background};
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  width: 53px;
  height: 53px;
  transform: scale(1);
  transition: all .2s ease;
  &:hover{
    transform: scale(1.03);
  }
  img{
    margin: auto;
  }
`)