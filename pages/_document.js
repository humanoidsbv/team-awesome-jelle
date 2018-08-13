import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Header from '../components/header/Header';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Header />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
