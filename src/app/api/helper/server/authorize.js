// import jwt from "jsonwebtoken";
import {  jwtVerify } from 'jose';

export default async function authorize(token) {
    try {
       
        const data = await jwtVerify(token, new TextEncoder().encode('c2eac21ded9e080256ddfda21eb6a1484179ff1ee0a9eef12ea367a0b354564b'));
        
        return ({ authorize: true, email: data.payload.email })
    } catch (err) {
        
        return { authorize: false, email: '' }
    }

}