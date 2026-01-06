# 📝 Feedback Web Form Project

A serverless web application for collecting user feedback, built using AWS services and deployed via Amazon S3.

## 🌐 Live Demo

Access the live app here: [Feedback UI](http://feedback-ui-project.s3-website-ap-southeast-2.amazonaws.com)

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: AWS Lambda (Python)
- **API Gateway**: REST API with POST method
- **Database**: Amazon DynamoDB
- **Hosting**: Amazon S3 (Static Website Hosting)

## 📦 Project Structure

## 🚀 Features

- Submit feedback with name, comment, and rating
- Stores feedback in DynamoDB with timestamp
- Serverless architecture using AWS Lambda
- CORS-enabled API Gateway integration
- Responsive UI hosted on Amazon S3

## 📁 Frontend Overview

### `index.html`

Basic form with fields for name, comment, and rating.

### `style.css`

Responsive styling for a clean user experience.

### `script.js`

Handles form submission and sends POST request to API Gateway.


  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, comment, rating })
});
