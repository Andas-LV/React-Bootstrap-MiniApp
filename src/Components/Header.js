import React from 'react'
import { Container, FormControl, Navbar, Nav, Form, Button} from 'react-bootstrap'
import logo from './favicon.ico'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Contacts from "../Pages/Contacts"
import Blog from "../Pages/Blog"
import Filter from "../Pages/Filter"
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../Components/LangButtons';

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar sticky='top' collapseOnSelect expand="md" bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href='/'>
            <img
              src={logo}
              height="30"
              width="30"
              className='d-inline-block align-top'
              alt='logo'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav' className='d-flex justify-content-between'>
            <Nav className="mr-auto">
              <Nav.Link href="/"> {t('home')} </Nav.Link>
              <Nav.Link href="/about"> {t('about')}</Nav.Link>
              <Nav.Link href="/contacts"> {t('contacts')} </Nav.Link>
              <Nav.Link href="/blog"> {t('blog')} </Nav.Link>
              <Nav.Link href="/filter"> Filter </Nav.Link>
            </Nav>
            <Form inline className='d-flex justify-content-between'>
              <FormControl
                type="text"
                placeholder={t('search')}
                className='mr-sm-3'
                style={{ marginRight: '5px' }}
              />
              <Button variant='outline-info'>{t('search')}</Button>
              <LanguageSwitcher />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/filter" element={<Filter />} />
        </Routes>
      </Router>
    </>
  );
};

export default Header;