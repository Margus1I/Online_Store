import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink href={SHOP_ROUTE} style={{color:'white'}}>Смартофоны</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto, column-gap-2">
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button variant={"outline-light"}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизоваться</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;