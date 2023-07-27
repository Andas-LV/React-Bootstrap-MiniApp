import React from 'react'
import CarouselBox from '../Components/CarouselBox'
import {Container, Card, CardGroup, Button} from "react-bootstrap"
import { useTranslation } from 'react-i18next';
import tm1 from "../Assets/tm1.jpg"
import tm2 from "../Assets/tm2.jpg"
import tm3 from "../Assets/tm3.jpg"


const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <CarouselBox />
      <Container>
        <h2 className="text-center m-4">{t('ourTeam')}</h2>
        <CardGroup className="m-4">
          <Card style={{ marginRight: '10px' }}>
            <Card.Img variant="top" src={tm1} />
            <Card.Body>
              <Card.Title>{t('devs')}</Card.Title>
              <Card.Text>
              {t('text15')}
              </Card.Text>
              <Button variant="dark">{t('aboutTeam')}</Button>
            </Card.Body>
          </Card>

          <Card style={{ marginRight: '10px' }}>
            <Card.Img variant="top" src={tm2} />
            <Card.Body>
              <Card.Title>{t('devs')}</Card.Title>
              <Card.Text>
              {t('text15')}
              </Card.Text>
              <Button variant="dark">{t('aboutTeam')}</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Img variant="top" src={tm3} />
            <Card.Body>
              <Card.Title>{t('devs')}</Card.Title>
              <Card.Text>
              {t('text15')}
              </Card.Text>
              <Button variant="dark">{t('aboutTeam')}</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default Home;