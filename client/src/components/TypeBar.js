import React from 'react';
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup';
import {Context} from "../index";
import {useContext} from "react";

const TypeBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    className="border-dark-subtle"
                    active={type.id === device.selectedType.id}
                    onClick={() => device.setSelectedType(type)}
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar;