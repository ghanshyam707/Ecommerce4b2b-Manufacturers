import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { models } from "../model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { userModel } = models;
export async function POST(req) {
  try {
    const data = await req.json();
    const user = (await userModel.find({ email: data.email }).exec())[0];
    if (user) {
      if (bcrypt.compareSync(data.password, user.hash)) {
        const token = jwt.sign(
          { email: user.email },
          "c2eac21ded9e080256ddfda21eb6a1484179ff1ee0a9eef12ea367a0b354564b",
          { expiresIn: "7h" }
        );
        cookies().set("authorization", token, { httpOnly: true });
        return NextResponse.json({ status: "OK" }, { status: 200 });
      } else {
       return NextResponse.json({ status: "WRONGPASSWORD" }, { status: 400 });
      }
    } else {
     return NextResponse.json({ status: "USERNOTREGISTERED" }, { status: 400 });
    }
  } catch (err) {
    console.log(err);
  }
}
