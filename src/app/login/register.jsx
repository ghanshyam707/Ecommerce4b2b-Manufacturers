"use client";

import React from "react";
import { Button, Form, Input } from "antd";
const onFinish = (values) => {
  try {
    let res = fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
    });
  } catch (err) {
    
  }

};

const Register = ({ setShowLogin }) => {
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="on">
        <Form.Item
          label="First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please input your firstName!",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please input your Last Name!",
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Industry Name"
          name="industryname"
          rules={[
            {
              required: true,
              message: "Please input your industryname!",
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <Button
            type="primary"
            htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <hr></hr>
      <div>
        Already Registered ?
        <Button
          type="text"
          onClick={handleLoginClick}>
          {" "}
          Login here{" "}
        </Button>
      </div>
    </>
  );
};

export default Register;
