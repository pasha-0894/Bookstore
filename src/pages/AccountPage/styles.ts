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

export const SubHeader = styled.h2`
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #313037;
  text-transform: uppercase;
  margin: 0 0 16px 0;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export const InfoBlock = styled.div<any>`
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  border-bottom: ${(props) => props.border || "none"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
`;

export const InputName = styled.span`
  font-family: "Helios";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #313037;
`;

export const Input = styled.input`
  width: 544px;
  font-family: "Helios";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  display: flex;
  align-items: center;
  color: #313037;
  border: 1px solid #e7e7e7;
  padding-top: 14px;
  padding-bottom: 10px;
  padding-left: 20px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonBlock = styled.div`
  margin: 48px 0 72px 0;
  align-self: flex-end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;

export const Button = styled.button<any>`
  background: ${(props) => props.background || "#313037"};
  font-family: "Bebas Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${(props) => props.color || "#FFFFFF"};
  border: ${(props) => props.border || "none"};
  padding: 18px 50px 15px 50px;
`;
