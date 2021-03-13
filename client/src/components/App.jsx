// Dependencies
import React, { useState, useEffect } from 'react';
import { setOne, getOne, deleteOne, getAll } from 'local-js';
import styled from 'styled-components';
// Children components
import CreateItem from './CreateItem.jsx';

// Styling
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default function App() {
    // Hold all to-do items
    const [toDoItems, setToDoItems] = useState([]);

    return (
        <Container>
            <h1>React-To-Do</h1>
            <CreateItem />
        </Container>
    );
};
