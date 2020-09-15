import React from "react";
import { Form, Input, Button, Row, Col, Divider, notification } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "../../config/axios";
import { withRouter } from "react-router-dom";

const layout = {
  labelCol: { xs: 24, sm: 7, md: 6, lg: 6, xl: 5, xxl: 4 },
  wrapperCol: { xs: 24, sm: 17, md: 18, lg: 18, xl: 19, xxl: 20 },
};
function Register(props) {
  console.log(props);

  const onFinish = (values) => {
    const { email, password, name } = values;
    axios
      .post("/users/register", {
        username: email,
        password,
        name,
      })
      .then((res) => {
        notification.success({
          message: "สมัครแล้ว",
        });
        props.history.push("/login");
      })
      .catch((err) => {
        notification.error({
          message: "พัง",
        });
      });
  };

  return (
    <Row justify="center">
      <Col xs={23} sm={23} md={23} lg={14} xl={14} xxl={12}>
        <div className="Form">
          <Row justify="center">
            <Title level={2} className="Title">
              Register
            </Title>
          </Row>
          <Divider className="Divider" />
          <Form {...layout} onFinish={onFinish} style={{ width: "100%" }}>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              hasFeedback
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                function (form) {
                  const validator = function (rule, value) {
                    if (!value || form.getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "ยินยันพาสเวิร์ด ต้องตรงกับ พาสเวิร์ด"
                    );
                  };

                  return { validator };
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="name"
              label={<span>Nickname&nbsp;</span>}
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Button className="Button" type="primary" htmlType="submit">
              Register
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default withRouter(Register);
