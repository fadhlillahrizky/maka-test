import React from 'react';
import {useSelector} from 'react-redux';
import {
    selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Display() {
    const count = useSelector(selectCount);

    return (
        <div className="mt-20 border-2 px-20 py-16 rounded-xl shadow-lg w-52 mx-auto flex justify-center items-center">
            <span className={styles.value}>{count}</span>
        </div>
    );
}
