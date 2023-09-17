import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
  const handleLoginClick = () => {
    setShowLogin(false);
    };
    
  const onFinish = async (values) => {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(values),
    });
      const data = await res.json();
      console.log(data)
      if (data.status === 'OK') {
          router.push('/user')
      }
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
        Not Registered ?
        <Button
          type="text"
          onClick={handleLoginClick}>
          {" "}
          Register here{" "}
        </Button>
      </div>
    </>
  );
}
