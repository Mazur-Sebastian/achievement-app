import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const isProd = true;
const extension = isProd ? 'js' : 'ts';
const folder = isProd ? 'dist' : 'src';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            synchronize: false,
            entities: [`${folder}/**/*.entity.${extension}`],
            migrations: isProd
                ? [`dist/migration/*.js`]
                : [`${folder}/**/Migration/**/*.${extension}`],
            subscribers: [`${folder}/**/*.subscriber.${extension}`],
            cli: {
                entitiesDir: `${folder}/entity`,
                migrationsDir: `${folder}/migration`,
                subscribersDir: `${folder}/subscriber`,
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
