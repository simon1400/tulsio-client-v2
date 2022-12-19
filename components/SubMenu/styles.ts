import styled from "@emotion/styled";

export const CSubMenu = styled.div`
  margin-bottom: 90px;
  .wrap-sub-menu{
    margin-left: -15px;
  }
  .menu-item{
    &.active{
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      background-color: #4545ff;
      border-radius: 20px;
    }
    a{
      color: rgba(255, 255, 255, 0.85);
      text-decoration: none;
      font-size: 20px;
      font-weight: 600;
      padding: 7px 15px;
    }
  }
`