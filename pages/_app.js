import App, { Container } from 'next/app'
import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import Router from "next/router";

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
initRouterListeners();

function initRouterListeners() {
    const routes = [];

    Router.events.on('routeChangeStart', (url) => {
        pushCurrentRouteInfo();
    });

    Router.events.on('routeChangeComplete', (url) => {
        fixScrollPosition();
    });

    function pushCurrentRouteInfo() {
        routes.push({pathname: Router.pathname, scrollY: window.scrollY});
    }

    function isBack() {
        return routes.length >= 2 && Router.pathname === routes[routes.length - 2].pathname;
    }

    function fixScrollPosition () {

        let scrollY = 0;

        if (isBack()) {
            routes.pop(); // route where we come from
            const targetRoute = routes.pop(); // route where we return
            scrollY = targetRoute.scrollY; // scrollY we had before
        }
        window.requestAnimationFrame(() => window.scrollTo(0, scrollY));

    }
}