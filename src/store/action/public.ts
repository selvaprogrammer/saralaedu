// import toast from "react-hot-toast";
import toast from "react-hot-toast";
import { Appdispatch, Appservice } from "../service";
import { connectSocket } from "../service/socket";

export const CommonAction = (name: any, url: any, data?: any, method = 'get') => async (dispatcher: any) => {
    const startTime = performance.now();
    const action = name.toUpperCase();
    dispatcher(Appdispatch(action));
    try {
        let masters = await Appservice(method, url, data);
        if (masters?.data) {
            dispatcher(Appdispatch(`${action}_SUCCESS`, masters?.data, performance.now() - startTime));
            return masters?.data;
        }
    }
    catch (error: any) {
        dispatcher(Appdispatch(`${action}_ERROR`, error?.response?.data ? error?.response?.data : true));
        return error;
    }
};
const socket = connectSocket();
export const ConnectSocket = () => (dispatcher: any) => {
    toast.loading('Getting new mails...');
    socket.on('connect', () => { console.log('on'); dispatcher(Appdispatch('SOCKET')); });
}
export const EmitSocket = (page: number, categoryId?: any) => (dispatcher: any) => {
    let data: any = { page: page, limit: 10, };
    if (categoryId) data.categoryId = categoryId;
    socket?.emit('message', data);
    socket.on('message', (data) => { dispatcher(Appdispatch('SOCKET_SUCCESS', data)); toast.dismissAll(); toast.success("Email Updated.."); });
}
export const DisconnectSocket = () => () => {
    socket.on('disconnect', () => { console.log('off'); });
}