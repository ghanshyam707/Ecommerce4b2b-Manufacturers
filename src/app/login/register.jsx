import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { register } from "../_services/login.service";
const onFinish = async (values) => {
  await register()
  
};

const Register = ({ setShowLogin }) => {
  const { control, handleSubmit } = useForm();
  const handleLoginClick = () => {
    setShowLogin(true);
  };
  return (
    <>
      {/* <Form
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
            htmlType="submit"
            block
          >
            Register
          </Button>
        </Form.Item>
      </Form> */}
      <form
        onSubmit={handleSubmit(onFinish)}
        className="d-flex align-items-center flex-column w-100"
      >
        <Controller
          name="firstname"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                id="firstname"
                label="First Name"
                fullWidth
                size="small"
                margin="normal"
                {...field}
              />
            );
          }}
        />
        <Controller
          name="lastname"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                id="lastname"
                label="Last Name"
                fullWidth
                size="small"
                margin="normal"
                {...field}
              />
            );
          }}
        />
        <Controller
          name="industryname"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                id="industryname"
                label="Industry Name"
                fullWidth
                size="small"
                margin="normal"
                {...field}
              />
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                id="email"
                label="Email"
                fullWidth
                size="small"
                margin="normal"
                {...field}
              />
            );
          }}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => {
            return (
              <TextField
                id="email"
                label="Password"
                type="password"
                fullWidth
                size="small"
                margin="normal"
                {...field}
              />
            );
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{ width: "30%" }}
        >
          Register
        </Button>
      </form>
      <hr></hr>
      <div>
        Already Registered ?
        <Button
          type="text"
          onClick={handleLoginClick}
        >
          {" "}
          Login here{" "}
        </Button>
      </div>
    </>
  );
};

export default Register;
