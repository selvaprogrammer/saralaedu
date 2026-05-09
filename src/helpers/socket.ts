import { io, Socket } from "socket.io-client";
import { config } from "./configuration";
const SOCKET_URL = config.socket;
export const socket: Socket = io(SOCKET_URL);
