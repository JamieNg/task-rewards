import React from 'react';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css'

const _App = ({Component, pageProps}) => {
  return (
    <Component {...pageProps} />
  );
};

export default _App;