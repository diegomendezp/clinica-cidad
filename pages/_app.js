import App, { Container } from 'next/app'
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
          <Component {...pageProps} />
      </Container>
    )
  }
}