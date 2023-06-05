## Installation

```bash
# cài package
$ yarn

# cài package serverless global để deploy lambda function
$ yarn global add serverless
```

## Biến môi trường

Tạo file .env theo cấu trúc file .env.example

- AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY: thông tin credentials của AWS user có quyền với lambda function, cloudwatch, api gateway. Cách lấy thông tin https://www.serverless.com/framework/docs/providers/aws/guide/credentials#creating-aws-access-keys
- AWS_DYNAMO_ACCESS_KEY_ID, AWS_DYNAMO_SECRET_ACCESS_KEY, AWS_DYNAMO_DEFAULT_REGION: tương tự như trên, thông tin credentials của user, có quyền với dynamodb. Hoàn toàn có thể trùng giá trị với các biên bên trên.
- SERVICE: tên lambda function
- STAGE: production/development

## DynamoDB

```bash
# re-generate the resources/dynamodb.yml from schemas
$ npm run genres
```

Lệnh trên dùng để tạo file khai báo các bảng trên dynamo. File này sẽ được khai báo ở phần Resource trong file serverless.yaml
Với thuộc tính Resource, khi chạy deploy, serverless package sẽ tạo ra database tương ứng nếu chưa có. Nếu có sẽ báo lỗi.
Do vậy trong trường hợp demo, nên chủ động trực tiếp tạo database ở trình quản lý của AWS trên web.
Hướng dẫn ở mục AWS Management console: https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/getting-started-step-1.html
Ở ví dụ demo cần tạo table với tên demo-develop-User-table. Với demo ứng với biến SERVICE trong file .env, develop ứng với biến Stage.

## Running the app

```bash
# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test Local Offline Deployment

Giả lập AWS và Api Gateway để chạy thử dưới local. Nên test trước khi deploy thật.

```bash
# start serverless-offline server and connect to online dynamodb
$ yarn sls:online
```

## Deployment Production

```bash
# deploy to AWS
$ yarn deploy
```

Lệnh trên sẽ tạo ra 1 lambda function, 1 api gateway trùng với tên service khai báo trong biến môi trường.
