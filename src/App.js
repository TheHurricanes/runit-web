import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import CropFreeIcon from '@material-ui/icons/CropFree';
import { initSocket } from './services/socketio';
import Drawer from './components/drawer';
import home from './screens/home/home';
import qrcode from './screens/qrcode/qrcode';
import './App.css';

class App extends React.Component {
  state = {
    socketConnected: false
  }
  socket = null

  componentDidMount() {
    this.socket = initSocket({
      onDisconnect: this.onDisconnect,
      onEvent: this.onEvent,
      onConnect: this.onConnect
    })
  }

  componentWillUnmount() {
    if (!this.socket) {
      this.socket.disconnect();
    }
  }

  onConnect = () => {
    console.log('connected')
    this.setState({ socketConnected: true })
  }

  onDisconnect = () => {
    console.log('disconnected')
    this.setState({ socketConnected: false })
  }

  onEvent = (eventName, data) => {
    if (eventName === 'linkToSession') {
      this.socket.disconnect()
      
    }
    console.log(eventName, data)
  }

  render() {
    const links = [
      {
        text: 'Home',
        link: '/',
        icon: <HomeIcon/>,
      },
      {
        text: 'Code',
        link: '/code',
        icon: <CropFreeIcon/>,
      }
    ];

    return (
      <div className="app-container">
          <Router>
            <Drawer links={links} socketConnected={this.state.socketConnected}>
              <Route path="/" exact component={home} />
              <Route path="/code" exact component={qrcode} />
            </Drawer>
          </Router>
      </div>
    );
  }
}

export default App;
