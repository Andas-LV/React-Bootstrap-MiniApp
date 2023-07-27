import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    // Укажите конфигурацию для языков
    resources: {
      en: {
        translation: {
          home: 'Home',
          about:'About us',
          contacts:'Contacts',
          blog:'Blog',
          natureImg:'Nature Image',
          search:'Search',
          ourTeam:'Our team',
          devs:'Dev-s',
          aboutTeam:'About team',
          design:'Design',
          team:'Team',
          prog:'Prog',
          frameworks:'Frameworks',
          libs:'Libraries',
          contactUs:'Contact us',
          emailAddress:'Email address',
          enterEmail:'Enter email',
          emailConf:"We'/ll never share your email with anyone else",
          examplePassword:'Example password',
          checkMeOut:"Check me out",
          submit:'Submit',
          blogPost:'Blog Post',
          categories:'Categories',
          someText:'Some Text',
          text30:'The evening sun turned the sky orange. A light breeze caressed my face. I walked through a beautiful park, enjoying nature and tranquility. The chirping of birds could be heard in the distance, creating an atmosphere of peace and tranquility. In silence, for a moment, I forgot all my worries and just enjoyed the moment.',
          text15:'Spring rain softly knocks on the window, reviving the earth. The leaves are blooming, nature is awakening, filling the air with the scent of freshness.',
          text8:'A golden sunset envelops the world in warm rays.',
        },
      },
      ru: {
        translation: {
          home: 'Главная',
          about:'О нас',
          contacts:'Контакты',
          blog:'Блог',
          natureImg:'Картина Природы',
          search:'Поиск',
          ourTeam:'Наша команда',
          devs:'Разрабы',
          aboutTeam:'О команде',
          design:'Дизайн',
          team:'Команда',
          prog:'Прог',
          frameworks:'Фреймворки',
          libs:'Библиотеки',
          contactUs:'Свяжитесь с нами',
          emailAddress:'Адрес email',
          enterEmail:'Введите email',
          emailConf:"Мы никогда не будем делиться вашей электронной почтой с кем-либо",
          examplePassword:'Типо пароль',
          checkMeOut:"Зацени",
          submit:'Отправить',
          blogPost:'Сообщение блога',
          categories:'Категории',
          someText:'Некий Текст',
          text30:'Вечернее солнце окрасило небо в оранжевый цвет. Легкий ветерок ласкал мое лицо. Я гулял по красивому парку, наслаждаясь природой и спокойствием. Вдалеке слышно щебетание птиц, что создает атмосферу умиротворения и спокойствия. В тишине на мгновение я забыл обо всех своих заботах и просто наслаждался моментом.',
          text15:'Весенний дождь тихонько стучит в окно, оживляя землю. Листья распускаются, природа пробуждается, наполняя воздух ароматом свежести.',
          text8:'Золотой закат окутывает мир теплыми лучами.',
        },
      },
    },
    lng: 'en', // Установите начальный язык
    fallbackLng: 'en', // Язык по умолчанию, если не найдены переводы
    interpolation: {
      escapeValue: false, // Отключите экранирование HTML-символов
    },
  });

export default i18n;
