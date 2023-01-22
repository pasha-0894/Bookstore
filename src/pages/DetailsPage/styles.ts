import { ButtonBack, SelectImg } from "assets/icons";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 72px;
`;

export const Header = styled.h1`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 56px;
  line-height: 64px;
  color: #313037;
  text-transform: uppercase;
  margin: 37px 0 48px 0;
`;

export const StyledButtonBack = styled(ButtonBack)`
  width: 42px;
  height: 14px;
  cursor: pointer;
`;

export const Info = styled.div`
  width: 100%; //временно, потом убрать
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImageBackround = styled.div`
  width: 544px;
  height: 472px;
  background: #fee9e2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InfoContent = styled.div`
  width: 448px;
  height: 472px;
  border-top: solid 1px #e7e7e7;
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 41px;
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 24px;
`;

export const InfoDetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DetailsRowTitle = styled.span`
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: #a8a8a8;
`;

export const DetailsRowDescription = styled.span`
  display: flex;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  text-align: right;
  color: #313037;
`;

export const StyledSelectImg = styled(SelectImg)`
  height: 16px;
  width: 16px;
  align-self: center;
  margin-left: 8px;
  cursor: pointer;
`;

export const ButtonCart = styled.button`
  height: 56px;
  border: none;
  background: #313037;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.05em;
  color: #ffffff;
  cursor: pointer;
  margin-top: 77px;
`;

export const Prewiew = styled.span`
  align-self: center;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #313037;
  margin-top: 50px;
`;

export const StyledBookImg = styled.img`
  height: 350px;
  width: 300px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px 24px 40px;
  cursor: pointer;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a8a8a8;
`;

export const SliderHeader = styled.h1`
  margin: 72px 0 0 0;
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: #313037;
`;

export const FavoritesButton = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  height: 56px;
  width: 56px;
  background: #313037;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
