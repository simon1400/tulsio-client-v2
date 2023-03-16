import styled from "@emotion/styled";

export const CategoryTop = styled.div`
  h1{
    margin-bottom: 80px;
  }
`


export const SubMenu = styled.div`
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
      color: rgba(255, 255, 255, 0.75);
      text-decoration: none;
      font-size: 1.25em;
      font-weight: 600;
      padding: 3px 15px;
      display: block;
      transition: all .5s ease;
      &:hover{
        color: white;
      }
    }
  }
`

export const StickyNav = styled.div<{sticky: boolean}>(({sticky}) => `
  position: fixed;
  top: 0;
  padding-top: 20px;
  z-index: 1000;
  width: 100%;
  transform: translateY(${sticky ? "0" : "-90px"});
  transition: all ${sticky ? ".5s" : "0"} ease;
  &:before{
    position: absolute;
    display: block;
    content: '';
    width: 200vw;
    height: 80%;
    left: -100vw;
    z-index: -1;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(15px);
  }
  /* WebkitBackdropFilter: "blur(15px)", */
`)