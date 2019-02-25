import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from "./style/index";

const InitApp = () => (
   <Fragment>
      <GlobalStyle />
      <App />
   </Fragment>
)

ReactDOM.render(<InitApp />, document.getElementById('root'));

serviceWorker.unregister();
