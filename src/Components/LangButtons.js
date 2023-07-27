import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownButton title="Select Language" variant='dark'>
      <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
      <Dropdown.Item onClick={() => changeLanguage('ru')}>Russian</Dropdown.Item>
    </DropdownButton>
  );
};

export default LanguageSwitcher;