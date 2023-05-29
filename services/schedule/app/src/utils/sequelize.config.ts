import { SequelizeModuleOptions } from '@nestjs/sequelize';

const config: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'developer',
  password: 'maratVikaSofa_404Laith',
  database: 'schedule_db',
  autoLoadModels: true,
  synchronize: false,
  logging: false,
  retryAttempts: Infinity,
  retryDelay: 60000,
  pool: {
    max: 20,
    min: 5,
  },
};

export default config;
