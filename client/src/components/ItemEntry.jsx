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

const CompleteButton = styled.button`
    border: 2px solid green;
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
        background-color: green;
        border: 2px solid whitesmoke;
    }
`;

const EditButton = styled.button`
    border: 2px solid #edcc26;
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
        background-color: #edcc26;
        border: 2px solid whitesmoke;
    }
`;

const CompletedText = styled.h2`
    text-decoration: line-through;
    color: #7d7780;
`;

export default function ItemEntry({ item, updateItems }) {
    const { key, data } = item;

    // Delete handler
    function deleteItem() {
        deleteOne(key);
        updateItems();
    }

    // Complete handler
    function completeItem() {
        const data = { status: 'complete' };
        setOne(key, data);
        updateItems();
    }

    // Conditional rendering for item text
    const textRender = data.status === 'complete'
        ? <CompletedText>{key}</CompletedText>
        : <h2>{key}</h2>;

    
    return (
        <Container>
            {textRender}
            <DeleteButton onClick={() => deleteItem()}>Delete</DeleteButton>
            <CompleteButton onClick={() => completeItem()}>Complete</CompleteButton>
        </Container>
    );
}
