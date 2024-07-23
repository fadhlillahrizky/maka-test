import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className="bg-gray-400 rounded-2xl text-5xl h-20 w-24 font-extrabold flex justify-center items-center mr-5 shadow-lg"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <p className="text-white">-</p>
        </button>
        <input
            className="w-20 h-20 ml-10 mr-10 text-center border-2 rounded shadow-lg "
            aria-label="Set amount"
            value={count}
            onChange={(e) => dispatch(incrementByAmount(Number(e.target.value)))}
        />
        <button
            className="bg-blue-400 rounded-2xl text-5xl h-20 w-24 font-extrabold flex justify-center items-center shadow-lg"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          <p className="text-gray-200">+</p>
        </button>
      </div>
    </div>
  );
}
