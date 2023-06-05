## Installation

```bash
# Install package
$ yarn

# Install package serverless global to deploy lambda function
$ yarn global add serverless
```

## Environment

Create a file .env follow file .env.example

- AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY: credentials of AWS user authorized with lambda function, cloudwatch, api gateway. Prefer https://www.serverless.com/framework/docs/providers/aws/guide/credentials#creating-aws-access-keys
- AWS_DYNAMO_ACCESS_KEY_ID, AWS_DYNAMO_SECRET_ACCESS_KEY, AWS_DYNAMO_DEFAULT_REGION: the same above information
- SERVICE: lambda function name
- STAGE: production/development

## DynamoDB

```bash
# re-generate the resources/dynamodb.yml from schemas
$ npm run genres
```

The above command is used to create a file declaring tables on dynamo. This file will be declared in the Resource Folder of the serverless.yaml file
With the Resource property, when running deploy, the serverless package will create the corresponding database if it doesn't already exist. If so, an error will be reported.

## Running the app

```bash
# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test Local Offline Deployment

Emulate AWS and Api Gateway for local testing. Should be test before deployment to production.

```bash
# start serverless-offline server and connect to online dynamodb
$ yarn sls:online
```

## Deployment Production

```bash
# deploy to AWS
$ yarn deploy
```

The above command will create a lambda function, an api gateway that matches the service name declared in the environment variable.
