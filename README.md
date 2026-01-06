# web_for# Feedback Web Form Project

A serverless web app to collect user feedback using AWS services.

## Tech Stack
- Frontend: HTML, CSS, JS (hosted on Amazon S3)
- Backend: AWS Lambda + API Gateway
- Database: DynamoDB

## Setup
1. Deploy frontend files to S3 bucket with public access.
2. Create API Gateway with POST method at `/feedback`.
3. Connect API Gateway to Lambda function.
4. Lambda stores feedback in DynamoDB.

## Deployment
- S3: Enable static website hosting.
- API Gateway: Enable CORS and deploy to a stage.
- Lambda: Add permissions to access DynamoDB.

## Sample API Request
```json
POST /feedback
{
  "name": "Teajas",
  "comment": "Great UI!",
  "rating": 5
}
