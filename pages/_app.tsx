import React from "react";
import "@elastic/eui/dist/eui_theme_light.css";

const _App = ({ Component, pageProps }) => {
  return (
    <div style={{ width: 900 }}>
      <Component {...pageProps} />
    </div>
  );
};

export default _App;
