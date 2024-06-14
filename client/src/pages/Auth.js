import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5 border-dark-subtle">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3 border-dark-subtle"
                        placeholder="Введите email..."
                    />
                    <Form.Control
                        className="mt-3 border-dark-subtle"
                        placeholder="Введите пароль..."
                    />
                    <div className="d-flex justify-content-between align-items-center">
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button
                            className="mt-3"
                            variant={"outline-success"}
                        >
                            {isLogin ? 'Войти' : "Регистрация"}
                        </Button>
                    </div>
                </Form>
            </Card>

        </Container>
    );
};

export default Auth;