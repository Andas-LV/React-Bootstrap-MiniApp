import React from 'react'
import {Container, Button, Form} from "react-bootstrap"
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Container style={{ width: "500px" }}>
      <h1 className='text-center mt-5'>{t('contactUs')}</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>{t('emailAddress')}</Form.Label>
          <Form.Control type="email" placeholder={t('enterEmail')} />
          <Form.Text>
          {t('emailConf')}
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>{t('examplePassword')}</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>

        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label={t('checkMeOut')} />
        </Form.Group>
        <Button variant='dark' type="submit">{t('submit')}</Button>
      </Form>
    </Container>
  );
};

export default Contacts;