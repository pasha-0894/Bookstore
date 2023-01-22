import { FavoritesIconDisabled, StarDarkIcon, StarWhiteIcon } from "assets/icons";
import { Slider, DescriptionTabs, SubscribeBlock } from "components";
import { SocialNetw } from "components/SocialNetw/SocialNetw";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hooks/hooks";
import { fetchDetails } from "store/main/detailsSlice";
import { fetchSearch } from "store/main/searchSlice";
import { getDetails } from "store/selectors/detailsSelector";
import { getBooksBySearch } from "store/selectors/searchSelector";
import {
  ButtonCart,
  Container,
  DetailsRowDescription,
  DetailsRowTitle,
  FavoritesButton,
  Header,
  ImageBackround,
  Info,
  InfoContent,
  InfoDetails,
  InfoDetailsRow,
  Prewiew,
  Price,
  PriceRow,
  Rating,
  SliderHeader,
  StyledBookImg,
  StyledButtonBack,
  StyledSelectImg,
} from "./styles";

export const DetailsPage = () => {
  const { info, isLoading } = useAppSelector(getDetails);
  const { books } = useAppSelector(getBooksBySearch);

  const detailsInfo = {
    isActive: false,
    ...info,
  };

  const { isbn = "" } = useParams();

  const dispatchDetails = useAppDispatch();
  useEffect(() => {
    dispatchDetails(fetchDetails(isbn));
  }, [dispatchDetails, isbn]);

  const dispatchSearch = useAppDispatch();
  useEffect(() => {
    dispatchSearch(fetchSearch(info.title));
  }, [dispatchSearch, info.title]);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  //const getLocalStorageItems = () => {};
  //getLocalStorageItems();

  //const [item, setItem] = useState(localStorage.getItem("item"));

  const handleFavoritesItem = () => {
    const data: any = localStorage.getItem("array");

    let array: any[];
    if (data === null) {
      array = [];
    } else {
      array = JSON.parse(data);
    }
    detailsInfo.isActive = !detailsInfo.isActive;

    if (array.indexOf((item: any) => item.isbn13 == isbn)) {
      array.push(detailsInfo);
    }
    localStorage.setItem("array", JSON.stringify(array));
    console.log(array);
  };

  return (
    <Container>
      {isLoading && <span>Loading...</span>}
      <StyledButtonBack onClick={handleBack}>Back</StyledButtonBack>
      <Header>{info.title}</Header>
      <Info>
        <ImageBackround>
          <StyledBookImg src={info.image} />
          <FavoritesButton>
            <FavoritesIconDisabled onClick={handleFavoritesItem} />
          </FavoritesButton>
        </ImageBackround>
        <InfoContent>
          <PriceRow>
            <Price>{info.price}</Price>
            <Rating>
              {Array.from({ length: info.rating }, () => (
                <StarDarkIcon key={Math.random()} />
              ))}
              {Array.from({ length: 5 - info.rating }, () => (
                <StarWhiteIcon key={Math.random()} />
              ))}
            </Rating>
          </PriceRow>
          <InfoDetails>
            <InfoDetailsRow>
              <DetailsRowTitle>Authors</DetailsRowTitle>
              <DetailsRowDescription>{info.authors}</DetailsRowDescription>
            </InfoDetailsRow>
            <InfoDetailsRow>
              <DetailsRowTitle>Publisher</DetailsRowTitle>
              <DetailsRowDescription>
                {info.publisher}, {info.year}
              </DetailsRowDescription>
            </InfoDetailsRow>
            <InfoDetailsRow>
              <DetailsRowTitle>Pages</DetailsRowTitle>
              <DetailsRowDescription>{info.pages}</DetailsRowDescription>
            </InfoDetailsRow>
            <InfoDetailsRow>
              <DetailsRowTitle>Format</DetailsRowTitle>
              <DetailsRowDescription>PDF</DetailsRowDescription>
            </InfoDetailsRow>
            <InfoDetailsRow>
              <DetailsRowDescription>
                More detailse <StyledSelectImg />
              </DetailsRowDescription>
            </InfoDetailsRow>
          </InfoDetails>
          <ButtonCart>add to cart</ButtonCart>
          <Prewiew>Preview book</Prewiew>
        </InfoContent>
      </Info>
      <DescriptionTabs info={info} />
      <SocialNetw />
      <SubscribeBlock />
      <SliderHeader>Similar Books</SliderHeader>
      <Slider books={books} />
    </Container>
  );
};
