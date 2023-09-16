import { NextResponse } from 'next/server';
import {models} from '../model';
import bcrypt from 'bcrypt'

const { userModel } = models

export async function POST(req) {
    const data = await req.json()
    data.hash = bcrypt.hashSync(data.password, 10);
    delete data.password;
    console.log(data)
    let newUser = new userModel(data)
    await newUser.save()
    return NextResponse.json({message:'User Added'})
}