import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DynamooseModuleOptions } from 'nestjs-dynamoose';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  private getNumber(key: string, defaultValue?: number): number {
    const value = this.configService.get(key, defaultValue);
    if (value === undefined) {
      throw new Error(key + ' env var not set'); // probably we should call process.exit() too to avoid locking the service
    }
    try {
      return Number(value);
    } catch {
      throw new Error(key + ' env var is not a number');
    }
  }

  private getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = this.configService.get(key, defaultValue?.toString());
    if (value === undefined) {
      throw new Error(key + ' env var not set');
    }
    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  private getString(key: string, defaultValue?: string): string {
    const value = this.configService.get(key, defaultValue);

    if (!value) {
      console.warn(`"${key}" environment variable is not set`);
      return;
    }
    return value.toString().replace(/\\n/g, '\n');
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV', 'development');
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('ENABLE_DOCUMENTATION', !this.isProduction);
  }

  get appConfig() {
    return {
      port: this.getString('PORT'),
    };
  }

  get dynamoDbConfig(): DynamooseModuleOptions {
    return {
      aws: {
        region: this.getString('AWS_DYNAMO_DEFAULT_REGION'),
        accessKeyId: this.getString('AWS_DYNAMO_ACCESS_KEY_ID'),
        secretAccessKey: this.getString('AWS_DYNAMO_SECRET_ACCESS_KEY'),
      },
      model: {
        create: false,
        prefix: `${process.env.SERVICE}-${process.env.STAGE}-`,
        suffix: '-table',
      },
    };
  }
}
