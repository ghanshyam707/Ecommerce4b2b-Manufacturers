import { NextResponse } from "next/server"
import { models } from "../../model"

const {userModel}  = models
export async function GET(req) {
    const headers = new Headers(req.headers)
    const email = headers.get('email')
    const res = await userModel.find({ email }, 'firstname lastname industryname').exec()
    return  NextResponse.json({res},{status:200})
}