import io from 'socket.io-client';
import { getUniqueSession } from './sessionManage';

export const initSocket = ({ onDisconnect, onEvent, onConnect }) => {
  var socket = io(process.env.REACT_APP_SOCKET_API_URL, {
    sessionId: getUniqueSession(),
  });
  socket.on('connect', onConnect);
  socket.on('event', (data) => onEvent('event', data));
  socket.on('disconnect', onDisconnect);
  return socket;
};
