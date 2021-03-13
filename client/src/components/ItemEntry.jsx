import React, { useState, useEffect } from 'react';
import { deleteOne, setOne } from 'local-js';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const DeleteButton = styled.button`
    border: 2px solid red;
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
        background-color: red;
        border: 2px solid whitesmoke;
    }
`;

export default function ItemEntry({ item, updateItems }) {
    const { key, data } = item;

    // Delete handler
    function deleteItem() {
        deleteOne(key);
        updateItems();
    }
    
    return (
        <Container>
            <h2>{key}</h2>
            <DeleteButton onClick={() => deleteItem()}>Delete</DeleteButton>
        </Container>
    );
}
