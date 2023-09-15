import { NextResponse } from 'next/server';
import {models} from '../model';

export async function GET(req) {
    return NextResponse.json({ message: 'Hello from Next.js!' })
}

const { userModel } = models

export async function POST(req) {
    const data = await req.json()
    console.log(data)
    let newUser = new userModel(data)
    await newUser.save()
    return NextResponse.json({message:'User Added'})
}