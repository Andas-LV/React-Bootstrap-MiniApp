import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-5 bg-dark rounded">
              <Nav.Item>
                <Nav.Link eventKey="first" className='text-white'>{t('design')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className='text-white'>{t('team')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className='text-white'>{t('prog')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className='text-white'>{t('frameworks')}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="five" className='text-white'>{t('libs')}</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className='mt-5'>
              <Tab.Pane eventKey="first">
                <img src='https://st4.depositphotos.com/4421563/30947/i/600/depositphotos_309478458-stock-photo-top-view-workstation-modern-technology.jpg' className='rounded' />
                <p>{t('text15')}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbMHEK9O6pf0CHSek_-AytSi1aRxNKihSlKFZg_cy&s' />
                <p>{t('text15')}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img src='https://thumbs.dreamstime.com/b/professional-development-programmer-working-programming-website-software-coding-technology-writing-codes-data-code-132331729.jpg' />
                <p>{t('text15')}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_-8APDy5MlKyQ6FNBIwNLsjb9tUNLhrLYIUoKMKSKNZHjwQFhpMY64X8suvzFZVt26Y&usqp=CAU' />
                <p>{t('text15')}</p>
              </Tab.Pane>
              <Tab.Pane eventKey="five">
                <img src='https://i.ytimg.com/vi/fBJ4NY3u1Dk/maxresdefault.jpg' className='w-100' />
                <p>{t('text15')}</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default About;