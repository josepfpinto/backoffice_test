import React, { useState, FC } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { counterActions } from './counterSlice'

// import { Button, Container } from '@mui/material';
import * as styles from './counterStyled';

const Counter: FC = () => {
    const counter = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    const increment = () => {
        dispatch(counterActions.increment());
    };

    return (
        <div>
            <h1 style={styles.resultOutput}>{counter}</h1>
            <div style={styles.btnActions}>
                <button onClick={decrement}>
                    Decrement
                </button>
                <button onClick={increment}>
                    Increment
                </button>
            </div>
        </div>
    );
};

export default Counter;