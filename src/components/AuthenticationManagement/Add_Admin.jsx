import React from "react";
import { Form, Input, Button, DatePicker, Radio } from "antd";
import "./stylesSignup.css";
import "antd/dist/antd.css";
import swal from 'sweetalert';
import useRequest from "../../services/RequestContext";
import moment from "moment";
import background from "../../images/background2.jpeg";

// Create a new admin
function Add_Admin() {
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 14,
    },
  };

  const validateMessages = {
    required: "${label} is required!",

    types: {
      number: "${label} is not a valid number!",
    },
  };

  const { request } = useRequest();

  const onFinish = async (values) => {
    values.role = "Admin";
    values.birthday = moment(values.birthday).format("YYYY-MM-DD");

      console.log("value", values);
      try {
        const result = await request.post("CommonSignup", values).then(

            swal({ text: "Successfully Created", icon: "success", button: "Okay!"})
                .then((value) => {
                window.location = '/Details';
            })
        )
        
      } catch (e) {
        console.log("post create customer error ", e);
        swal({ text: "An account has already been created for the email address you enterd. Try another email address",
              icon: "warning", button: "Okay!"})
                .then((value) => {
                window.location = '/Add_Admin';
            });
      }
  };


  // Demo
  const [form] = Form.useForm();
  const onFill = () => { form.setFieldsValue({ 
    name: 'Gimhani', 
    name1: 'Hettiarachchi', 
    nic: '263150569V',
    email: 'gimhani@gmail.com',
    number: '0776549756',
    inputpw: '12345',
    confirm: '12345',
    gender: 'Female',
  }); };

  const [value] = React.useState(1);

  return (
    <>
    <div className style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="main-container-signup">
        <div className="form-common">
          <h1>Add a new Admin</h1>

          <Form
            layout="vertical"
            form={form}
            name="signupPanelMember"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["name"]}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["name1"]}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["birthday"]}
              label="Date of Birth"
              rules={[{ required: true }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name={["gender"]}
              label="Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Radio.Group value={value}>
                <Radio value={"Male"}>Male</Radio>
                <Radio value={"Female"}>Female</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name={["nic"]}
              label="NIC"
              rules={[
                {
                  required: true,
                },
                {
                  max: 12,
                  min: 10,
                  message: "NIC is not valid",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["email"]}
              label="Email"
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
              name={["number"]}
              label="Mobile Number"
              rules={[
                {
                  required: true,
                },
                {
                  max: 10,
                  min: 10,
                  message: "Invalid phone number",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["inputpw"]}
              label="Create a Password"
              rules={[
                {
                  required: true,
                },
                {
                  min: 5,
                  message: "Enter more than 5 characters",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("inputpw") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <hr></hr>
            By signing up you agree to Star Hotel's{" "}
            <a href="#">Terms of Service and Privacy Policy</a>
            <hr></hr>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              {/* <Link to ="/signin" > */}
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              &nbsp;
              <Button href="/AuthenticationManagement" type="button" class="btn btn-outline-secondary" style={{marginLeft:"0px"}} > Cancel </Button>
              <br/>
              <Button type="button" htmlType="button" class="btn btn-outline-secondary" onClick={onFill} style={{marginLeft:"40px", marginTop:"10px"}}>Demo</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Add_Admin;
