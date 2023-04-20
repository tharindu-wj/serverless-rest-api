# Serverless REST API

> AWS serverless REST API. This supports automated deployments with Serverless Framework and Github Actions.

## Development

### Install dependencies

```
npm install
```

### Build locally

```
npm run build
```

### Run application locally

```
npm run dev
```

## Build and Deployment

This project use Serverless Framework and Github Actions for automated deployments. Currently project will deploy to AWS when changes pushed to `main` branch.

### Steps to setup Github Action

- Create an IAM user with below access.This role used by Serverless Framework to manage AWS resources. Note: You need to add additional access if you are adding AWS new services.

```
   AmazonAPIGatewayAdministrator
   AmazonDynamoDBFullAccess
   AmazonS3FullAccess
   AWSCloudFormationFullAccess
   AWSLambda_FullAccess
   CloudWatchLogsFullAccess
   IAMFullAccess
```

- Add Role access key and secret key in Github Actions secrets.

```
   AWS_ACCESS_KEY_ID
   AWS_SECRET_ACCESS_KEY
```
