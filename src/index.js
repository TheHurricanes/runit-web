import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import App from './pages';
import NoMatch from './pages/404';
import Login from './pages/login';
import Editor from './pages/editor';
import { initSocket } from './services/socketio';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  state = {
    socketConnected: false,
  };
  socket = null;

  componentDidMount() {
    this.socket = initSocket({
      onDisconnect: this.onDisconnect,
      onEvent: this.onEvent,
      onConnect: this.onConnect,
    });
  }

  componentWillUnmount() {
    if (!this.socket) {
      this.socket.disconnect();
    }
  }

  onConnect = () => {
    console.log('connected');
    this.setState({ socketConnected: true });
  };

  onDisconnect = () => {
    console.log('disconnected');
    this.setState({ socketConnected: false });
  };

  onEvent = (eventName, data) => {
    if (eventName === 'linkToSession') {
      this.socket.disconnect();
    }
    console.log(eventName, data);
  };

  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
          <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route path={`${process.env.PUBLIC_URL}/editor`} component={Editor} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
