import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Layout from './components/Layout';
import Theming from './components/Theming';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <Theming>
    <Layout>
      <App />
    </Layout>
  </Theming>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
