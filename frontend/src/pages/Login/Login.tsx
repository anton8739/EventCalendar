import {FC, useEffect} from "react";
import {Button, Card, Checkbox, Form, Input} from 'antd';
import './Login.scss'
import {useActions} from "../../hooks/useActions";
import {IUser} from "../../models/IUser";

const Login: FC = () => {
    const {login} = useActions();
    const onSubmit = (user:IUser) => {
        login(user.username, user.password)
    }
    return (<div className="login-page">
        <Card className="login-form" title={"Login to Event Calendar"}>
            <Form
                name="basic"
                autoComplete="off"
                onFinish={onSubmit}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{required: true, message: 'Please input your username!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Card>

    </div>)
}
export default Login;