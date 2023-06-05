import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DynamooseModule } from 'nestjs-dynamoose';
import { ApiConfigService } from './modules/shared/services';
import { SharedModule } from './modules/shared/shared.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    AutomapperModule.forRoot({
      options: [{ name: 'mapper', pluginInitializer: classes }],
      singular: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    DynamooseModule.forRootAsync({
      useFactory(configService: ApiConfigService) {
        console.log(configService.dynamoDbConfig);
        return configService.dynamoDbConfig;
      },
      inject: [ApiConfigService],
    }),
    SharedModule,
    UserModule,
  ],
})
export class AppModule { }
