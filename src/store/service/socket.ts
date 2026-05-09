import { config } from '@/helpers/configuration';
import { io, Socket } from 'socket.io-client';
let socket: Socket | null = null;
export const connectSocket = () => {
    if (!socket) socket = io(config.socket, { transports: ['websocket'], path: "/socket.io", withCredentials: true });
    return socket;
};
export const getSocket = () => socket;
export const disconnectSocket = () => {
    socket?.disconnect(); socket = null;
};
