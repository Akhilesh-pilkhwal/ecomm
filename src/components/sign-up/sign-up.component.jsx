import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined , LockOutlined} from '@ant-design/icons';
import { Formik, Form, Field } from 'formik';
import { Button } from 'antd';
import EcommInput from '../common/input/ecomm-input.component';

const SignUp = () => (
  <div>
    <h1>SignUp!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {() => (
        <Form>
          <Field
            prefix={<UserOutlined twoToneColor="#eb2f96" />}
            name="Name"
            placeholder="Enter name"
            component={EcommInput}
          />
          <br />
          <br />
          <Field
            prefix={<UserOutlined twoToneColor="#eb2f96" />}
            name="email"
            placeholder="Enter email"
            component={EcommInput}
          />
          <br />
          <br />
          <Field
            name="password"
            placeholder="Enter password"
            type="Password"
            component={EcommInput}
            prefix={<LockOutlined className="site-form-item-icon" />}
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
          <br />
          <br />
          <Button type="primary">Sign Up</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default SignUp;