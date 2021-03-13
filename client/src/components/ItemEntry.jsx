import React, { useState, useEffect } from 'react';
import { deleteOne, setOne } from 'local-js';
import styled from 'styled-components';

export default function ItemEntry({ item }) {
    const { key, data } = item;
    return (
        <>
            <h1>{key}</h1>
        </>
    );
}
