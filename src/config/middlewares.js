import morgan from 'morgan'; // подключаем Логер
import bodyParser from 'body-parser';
import compression from 'compression'; // сжимает body ответа сервера.
import helmet from 'helmet'; // помогает защитить приложение

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

export default app => {
  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  if (isDev) {
    app.use(morgan('dev'));
  }
};
