import styled from "@emotion/styled";
import Link from "next/link";

export const PodcastLinkS = styled.div `
  margin-top: 18px;
  max-height: 54px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-bottom: -5em;

  @media (max-width: 499px) {
    margin-top: 15px;
    margin-bottom: -6em;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px; 
    margin-right: 25px;

    @media (max-width: 499px) {
      gap: 12px;
    }
  }
  span {
    color: #FFFFFFB3;
    font-size: 16px;
      @media (max-width: 499px) {
        font-size: 13px;
      }
  }
  ul{
    margin: 0;
    padding-left: 0px;
    display: flex;
    li{
      display: inline-block;
      list-style-type: none;
      &:not(:first-of-type) {
        margin-left: 17px;
        @media (max-width: 499px) {
          margin-left: 12px;
        }
      }
    }
  }
`

export const LinkS = styled(Link)`
  position: relative; 
  display: block; 
  transition: all 0.3s ease;

  img {
    display: block;
    
    @media (max-width: 499px) {
      width: 24px;
    }
  }

  &:hover::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 54px;
    height: 54px;
    background-color: #ffffff14; 
    border-radius: 50%;
    z-index: -1;
    @media (max-width: 499px) {
      display: none;
    }
  }
`;