import {
  BannerContainer,
  BannerWrap,
  BannerTitle,
  BannerSubTittle,
  BannerText,
  BannerButton,
} from "./style";
import { useHistory } from "react-router-dom";
import illustrationImage from "../../Images/illustration.png";

const Banner = () => {
  const history = useHistory();
  return (
    <BannerContainer illustrationImage={illustrationImage}>
      <BannerWrap>
        <BannerTitle>KENZIE SHOP</BannerTitle>
        <BannerSubTittle>COMPRE ONLINE</BannerSubTittle>
        <BannerText>
          Faça suas comprars online sem se preocupar! Aqui você pode ter uma
          varieadade de opções por muito mais conforto
        </BannerText>
        <BannerButton onClick={() => history.push("/products")}>
          Comprar
        </BannerButton>
      </BannerWrap>
    </BannerContainer>
  );
};

export default Banner;
