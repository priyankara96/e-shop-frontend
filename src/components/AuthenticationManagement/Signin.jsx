import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./stylesSignin.css";
import logo from "../../images/logo2.png";
import background from "../../images/background2.jpeg";
//background2.jpeg

import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import { useHistory } from "react-router-dom";

function Signin() {
  const { request, updateToken } = useRequest();
  const { decodeToken, user, setUser } = useUser();
  const history = useHistory();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const result = await request.post("login", values);
      if (result.status === 200) {
        await updateToken(result.data.data.token);
        decodeToken(result.data.data.token);
        message.success(result.data.message);
        history.push("/Profile");
        window.location.reload(true);
      } else {
        message.error(result.data.message);
      }
      console.log("login ruslt ", result);
    } catch (error) {
      console.log("login error ", error);
      message.error(error.message);
    }
  };


  
  const [setValue] = React.useState(1);

  return (
    <>
    <div className style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="main-container-signin">
        <div style={{marginTop:"60px"}}>
          <h1 className="text-center">Login</h1>
          <br/>
          <div className="text-center">
            

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >

          <Row>
          <Col span={12}>
          <div style={{marginTop:"30px"}}>
          <img width={150} src={logo} alt="logo" className="logo" />
          </div>
          </Col>
          <Col span={12}>
          <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me |</Checkbox>
                </Form.Item>

                <a href="/Registration">Sign up</a>
              </Form.Item>

              <Form.Item>
                <Button type="primary" block
                  htmlType="submit"
                  className="login-form-button"
                  >
                  Login
                </Button>
              </Form.Item>
          </Col>
        </Row>
        <br/><br/><br/><br/>
              
            </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signin;
