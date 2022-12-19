import styled from "@emotion/styled"

export const Nav = styled.nav`
  display: block;
  ul{
    margin: 0;
    li{
      display: inline-block;
      list-style-type: none;
      &:not(:first-child) {
        padding-left: 20px;
      }
      &:not(:last-child) {
        padding-right: 20px;
      }
      a{
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
`