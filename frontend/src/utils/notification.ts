import {  notification } from 'antd';
export const errorNotification = (message:string) => notification.error({
    message :message
})
export const successNotification = (message:string) => notification.success({
    message :message
})