import { NextIcon, PrevIcon } from "assets/icons";
import { SimilarBooks } from "components/SimilarBooksList/SimilarBooksList";
import { Carousel } from "react-bootstrap";
import { Container } from "./styles";

export const Slider = ({ books }: any) => {
  const result = books.books;

  return (
    <Container slide={false} prevIcon={<PrevIcon />} nextIcon={<NextIcon />}>
      <Carousel.Item>
        {result && result.length > 0 && <SimilarBooks books={result.slice(0, 3)} />}
      </Carousel.Item>
      <Carousel.Item>
        {result && result.length > 0 && <SimilarBooks books={result.slice(4, 7)} />}
      </Carousel.Item>
      <Carousel.Item>
        {result && result.length > 0 && <SimilarBooks books={result.slice(7, 11)} />}
      </Carousel.Item>
    </Container>
  );
};

/* <Container>
      <WindowContainer>
        {result && result.length > 0 && <SimilarBooks books={result} />}
      </WindowContainer>
    </Container>
    */
