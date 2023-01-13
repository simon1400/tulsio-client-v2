import styled from "@emotion/styled"

export const HeaderWrap = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;
  @media (max-width: 960px) {
    padding: 50px 0;
  }
`

export const Logo = styled.div`
  @media (max-width: 960px) {
    img{
      width: 110px;
      height: 32px;
    }
  }
`

export const NavWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ControlWrap = styled.div`
  display: block;
  width: 27px;
  margin-left: 40px;
  svg{
    width: 27px;
    height: 27px;
    display: block;
    fill: rgba(255, 255, 255, 0.75);
    color: rgba(255, 255, 255, 0.75);
  }
`