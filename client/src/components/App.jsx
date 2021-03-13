// Dependencies
import React, { useState, useEffect } from 'react';
import { setOne, getOne, deleteOne, getAll } from 'local-js';
import styled from 'styled-components';

// Styling
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export default function App() {
    return (
        <Container>
            <h1>React-To-Do</h1>
        </Container>
    );
};
