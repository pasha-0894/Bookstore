import {
  ButtonSubscribe,
  Form,
  Input,
  StyledSubscribe,
  SubscribeSubtitle,
  SubscribeTitle,
} from "./styles";

export const SubscribeBlock = () => {
  return (
    <StyledSubscribe>
      <SubscribeTitle>Subscribe to Newsletter</SubscribeTitle>
      <SubscribeSubtitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </SubscribeSubtitle>
      <Form>
        <Input placeholder="Your email" />
        <ButtonSubscribe>Subscribe</ButtonSubscribe>
      </Form>
    </StyledSubscribe>
  );
};
