import styled from "@emotion/styled"

export const Nav = styled.nav`
  display: block;
  ul{
    margin: 0;
    li{
      display: inline-block;
      list-style-type: none;
      &:not(:first-of-type) {
        padding-left: 20px;
      }
      &:not(:last-of-type) {
        padding-right: 20px;
      }
      a{
        color: rgba(255, 255, 255, 0.75);
        text-decoration: none;
        font-weight: 600;
        font-size: 1.25em;
        transition: all .5s ease;
        &:hover{
          color: white;
        }
      }
    }
  }
`