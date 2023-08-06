import { ConnectionOptions } from 'typeorm';
import {
  TYPE_ORM_DB,
  TYPE_ORM_HOST,
  TYPE_ORM_PASSWORD,
  TYPE_ORM_PORT,
  TYPE_ORM_TYPE,
  TYPE_ORM_USER,
} from '@app/config';

const config: ConnectionOptions = {
  type: TYPE_ORM_TYPE,
  host: TYPE_ORM_HOST,
  port: TYPE_ORM_PORT,
  username: TYPE_ORM_USER,
  password: TYPE_ORM_PASSWORD,
  database: TYPE_ORM_DB,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
