import React from 'react';
import { Container, Row, Col, Image, Card, ListGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col md={9}>
          <div className="media m-5">
            <Image
              width={150}
              height={150}
              className="mr-3"
              src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2010/wikagraphic201032493.jpg"
            />
            <div className="media-body">
              <h5>{t('blogPost')}</h5>
              <p>
              {t('text15')}
              </p>
            </div>
          </div>
          <div className="media m-5">
            <Image
              width={150}
              height={150}
              className="mr-3"
              src="https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2010/wikagraphic201032493.jpg"
            />
            <div className="media-body">
              <h5>{t('blogPost')}</h5>
              <p>
              {t('text15')}
              </p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <h5 className='mt-5 text-center'>{t('categories')}</h5>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Html/Css</ListGroup.Item>
              <ListGroup.Item>JS</ListGroup.Item>
              <ListGroup.Item>REACT</ListGroup.Item>
              <ListGroup.Item>Node.JS</ListGroup.Item>
            </ListGroup>
          </Card>

          <Card className='mt-3 bg-light'>
            <Card.Body>
              <Card.Title>{t('someText')}</Card.Title>
              <Card.Text>
              {t('text30')}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;