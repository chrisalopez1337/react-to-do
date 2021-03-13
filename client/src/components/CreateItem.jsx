import React, { useState, useEffect } from 'react';
import { getOne, setOne } from 'local-js';
import styled from 'styled-components';

// Styling
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const Input = styled.input`
    border: 2px solid #9326c9;
    border-radius: 7px;
    padding: 7px;
    font-size: 16px;
    color: whitesmoke;
    font-family: inherit;
    background-color: transparent;
    margin-left: 10px;
`;

const Button = styled.button`
    border: 2px solid #9326c9;
    border-radius: 7px;
    padding: 7px;
    color: whitesmoke;
    font-family: inherit;
    background-color: transparent;
    margin-left: 10px;
    font-size: 16px;
    font-weight: bold;
    transition-duration: 0.2s;
    &:hover {
        background-color: #9326c9;
        border: 2px solid whitesmoke;
    }
`;

export default function CreateItem({ updateItems }) {
    // Hold Item title
    const [title, setTitle] = useState('');
    // Title handler
    function handleTitle(e) {
        setTitle(e.target.value);
    }

    // Submit handler
    function handleSubmit() {
        const key = title;
        const data = { status: 'none' };
        setOne(key, data);
        updateItems();
    }

    return (
        <Container>
            <h3>New To-Do:</h3>
            <Input placeholder="To-Do Name..." value={title} onChange={handleTitle}/>
            <Button onClick={() => handleSubmit()}>Add</Button>
        </Container>
    );
}
