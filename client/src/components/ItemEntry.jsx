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

const Input = styled.input`
    border: 2px solid #edcc26;
    border-radius: 7px;
    padding: 7px;
    font-size: 16px;
    color: whitesmoke;
    font-family: inherit;
    background-color: transparent;
    margin-right: 10px;
`;

export default function ItemEntry({ item, updateItems }) {
    const { key, data } = item;

    // Store data for editing an items name
    const [edit, setEdit] = useState(false);
    const [newTitle, setNewTitle] = useState('');

    // New title handler
    function handleNewTitle(e) {
        setNewTitle(e.target.value);
    }

    // Update handler
    function handleUpdate() {
        const data = { status: 'none' };
        deleteOne(key);
        setOne(newTitle, data);
        updateItems();
        setEdit(false);
    }


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

    // Conditional rendering for item 
    const itemRender = edit 
        ? (
            <Container>
                <Input placeholder="new title..." value={newTitle} onChange={handleNewTitle} />
                <EditButton onClick={() => handleUpdate()}>Update</EditButton>
            </Container>
          )
        : data.status === 'complete'
        ? (
            <Container>
                <CompletedText>{key}</CompletedText>
                <DeleteButton onClick={() => deleteItem()}>Delete</DeleteButton>
                <CompleteButton onClick={() => completeItem()}>Complete</CompleteButton>
                <EditButton onClick={() => setEdit(true)}>Edit</EditButton>
            </Container>
          )
        : (
            <Container>
                <h2>{key}</h2>
                <DeleteButton onClick={() => deleteItem()}>Delete</DeleteButton>
                <CompleteButton onClick={() => completeItem()}>Complete</CompleteButton>
                <EditButton onClick={() => setEdit(true)}>Edit</EditButton>
            </Container>
          );

    
    return (
        <>
            {itemRender}
        </>
    );
}
