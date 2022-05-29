import { Module } from '@nestjs/common';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { DraftsModule } from './drafts/drafts.module';
import { Draft } from './drafts/drafts.model';

const dbConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  models: [Draft],
  autoLoadModels: true,
};

if (process.env.NODE_ENV === 'production') {
  dbConfig.host = process.env.POSTGRES_HOST;
  dbConfig.port = Number(process.env.POSTGRES_PORT);
  dbConfig.username = process.env.POSTGRES_USER;
  dbConfig.database = process.env.POSTGRES_DB;
  dbConfig.password = process.env.POSTGRES_PASSWORD;
} else {
  dbConfig.dialect = 'sqlite';
  dbConfig.storage = 'sqlite3.db';
}

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    SequelizeModule.forRoot(dbConfig),
    DraftsModule,
  ],
})
export class AppModule {}
