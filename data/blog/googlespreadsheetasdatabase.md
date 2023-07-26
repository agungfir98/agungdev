---
title: Google Spreadsheet As Database
createdAt: 1658729977325
draft: false
image: ""
---

# Intro

This post will be about my learning progress about using google APIs. specifically using google spreadsheet to access cell data so I'm able to read and write data to it.

Recently my friend has been asking me about his project plan. he'd like to make an online wedding invitation business. Since Covid happen this trend skyrocketing. Almost everyone uses this kind of service. maybe because it's relatively cheaper and easy to distribute since almost everyone uses a smartphone nowadays.

Long story short, during the discussion I realized that we can use Google Sheets as a simple database to store RSVP data, and I think it's very convenient as well because then the about-to-be married couple can access it directly in the google sheet.

In this project, I will only do how to read and add data to the sheet.

I will be using NodeJS for this project

# Table of Content

- [Intro](#intro)
- [Table of Content](#table-of-content)
- [Prerequisite](#prerequisite)
- [Create Project](#create-project)
  - [Install Dependency](#install-dependency)
  - [Setting Up Server](#setting-up-server)
- [Read and Write Data](#read-and-write-data)
  - [Reading table data](#reading-table-data)
  - [Adding table data](#adding-data-to-the-table)
- [Resume](#resume)
  - [Pros and Cons](#pros-and-cons)

# Prerequisite:

- NodeJS
- Create the spreadsheet
- A Google Cloud Platform project with the API enabled.([How to do it](https://developers.google.com/workspace/guides/create-project))
- Authorization ([How to do it](https://developers.google.com/workspace/guides/create-credentials))
  <br />
  <br />

# Create Project

First, let's initialize the project using npm init

```js
npm init -y //or without "-y" if you'd like to configure the package.json
```

## Install Dependency

Here is the list of dependency we need:

1. express -> to create web server
2. body-parser -> to parse sent body (optional)
3. googleapis -> api that allow us to access google service
4. dotenv -> to store environment variable
5. nodemon -> just to ease up the development wihtout constantly reloading

```js
npm i googleapis express googleapis body-parser
```

```js
npm i -D nodemon
```

## Setting up server

Let's create a file called index.js and configure our web server

```js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log("server running at PORT: 3000"));
```

<br />

# Read and Write Data

## Reading table data

When accessing google sheet data, first we need to be authenticated before being able to get the data. Then we create an instance of the google sheet, finally, we can get the data by calling the function `get()`
provided by google which requires an object parameter containing spreadsheetId, and range. The documentation can be seen [here](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/get)

```js
app.get("/", async (req, res) => {
  //authentication to google api
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // instance dari google sheet api
  const sheets = google.sheets({ version: "v4", auth });

  // get data sheet
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `Sheet1!A:C`,
  });

  res.json({
    data: response.data.values,
  });
});
```

in a get method you'd need a spreadsheetId which we can see in the google sheet url, and in the get method, You'd see range key. You should specify which column to be read to able to read it.

## Adding data to the table

In order to add data to the table, we can use a method called `append()` which takes an object with keys: spreadsheetId, range, valueInputOption, and resource which contains another object filled with an array of an array as a value. The documentation can be read [here](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/append)

```js
app.post("/", async (req, res) => {
  const { name, hadir, msg } = req.body;
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = await google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:C",
    valueInputOption: "RAW",
    resource: {
      values: [[name, hadir, msg]],
    },
  });
  res.json({
    data: response.config.data.values,
  });
});
```

<br />

# Resume

Time to wrap it up.
The complete code would be like this.

```js
const express = require("express");
const app = express();
const { google } = require("googleapis");
require("dotenv").config();
const bodyParser = require("body-parser");

const spreadsheetId = process.env.SHEET_ID;

app.use(bodyParser.json());
app.get("/", async (req, res) => {
  //authentication to google api
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  // instance dari google sheet api
  const sheets = google.sheets({ version: "v4", auth });

  // get data sheet
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `Sheet1!A:C`,
  });

  res.json({
    data: response.data.values,
  });
});

app.post("/", async (req, res) => {
  const { name, hadir, msg } = req.body;
  const auth = await google.auth.getClient({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = await google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:C",
    valueInputOption: "RAW",
    resource: {
      values: [[name, hadir, msg]],
    },
  });
  res.json({
    data: response.config.data.values,
  });
});

app.listen(3000, () => console.log("app listening on port 3000"));
```

## pros and cons

Google sheet was never designed to be a database so there would be disadvantaged e.g.

- There won't be any complex queries like join etc.
- only scale to 5 Million cells.
- there is an API quota that limits only 500 requests per 100 seconds.

And The Pros would be:

- good for prototyping.
- good for really simple projects.
- if you are broke. 😁

I think that's it for my own learning report.

Ciao~
