import { StyledButtonBack } from "pages/DetailsPage/styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Header,
  Input,
  InputBlock,
  InputName,
  InfoBlock,
  SubHeader,
  Button,
  ButtonBlock,
} from "./styles";

export const AccountPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <StyledButtonBack onClick={handleBack}>Back</StyledButtonBack>
      <Header>Account</Header>
      <InfoBlock>
        <SubHeader>profile</SubHeader>
        <Form>
          <InputBlock>
            <InputName>Name</InputName>
            <Input placeholder="Anton Markov" />
          </InputBlock>
          <InputBlock>
            <InputName>Email</InputName>
            <Input placeholder="a.markov@gmail.com" />
          </InputBlock>
        </Form>
      </InfoBlock>
      <InfoBlock border="1px solid #E7E7E7" paddingBottom="72px">
        <SubHeader>password</SubHeader>
        <Form>
          <InputBlock>
            <InputName>Password</InputName>
            <Input placeholder="********" />
          </InputBlock>
          <InputBlock>
            <InputName>New password</InputName>
            <Input placeholder="New password" />
          </InputBlock>
          <InputBlock>
            <InputName>Confirm new password</InputName>
            <Input placeholder="Confirm new password" />
          </InputBlock>
        </Form>
      </InfoBlock>
      <ButtonBlock>
        <Button>Save changes</Button>
        <Button background="#FFFFFF" color="#313037" border="1px solid #E7E7E7">
          cancel
        </Button>
      </ButtonBlock>
    </Container>
  );
};
