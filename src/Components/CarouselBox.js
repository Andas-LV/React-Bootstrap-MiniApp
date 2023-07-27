import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from 'react-i18next';
import wall1 from "../Assets/wallp1.jpg";
import wall2 from "../Assets/wallp2.jpg";
import wall3 from "../Assets/wallp3.jpg";
import wall4 from "../Assets/wallp4.jpg";

const CarouselBox = () => {
  const { t } = useTranslation();

  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-auto" src={wall1} alt="wall1" />
        <Carousel.Caption>
          <h3>{t('natureImg')}</h3>
          <p>{t('text8')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={wall2} alt="wall1" />
        <Carousel.Caption>
          <h3>{t('natureImg')}</h3>
          <p>{t('text8')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={wall3} alt="wall1" />
        <Carousel.Caption>
          <h3>{t('natureImg')}</h3>
          <p>{t('text8')}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={wall4} alt="wall1" />
        <Carousel.Caption>
          <h3>{t('natureImg')}</h3>
          <p>{t('text8')}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBox;