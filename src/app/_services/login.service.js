import { Descriptions,notification } from "antd";
import handleError from "./errorhandling.service";


export async function login(values, router) {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify(values),
        });
        const data = await res.json();
        console.log(data)
        if (data.status === 'OK') {
            router.push('/user')
        }
        if (data.status === 'WRONGPASSWORD') {
            notification.error({
                message: 'Wrong Password',
           })
        }
        if (data.status === 'USERNOTREGISTERED') {
            notification.error({
                message: 'User Not Found',
            })
        }
    } catch (err) {
        handleError(err)
    }
}

export async function register(values) {
    try {
        let res = fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(values),
        });
    } catch (err) {
        handleError(err)
    }
}