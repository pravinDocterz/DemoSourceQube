/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import AppName from './app.json';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
AppRegistry.registerComponent(AppName.name, () => App);
//AppRegistry.runApplication(AppName.name, {
//  rootTag: document.getElementById('root'),
//});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
