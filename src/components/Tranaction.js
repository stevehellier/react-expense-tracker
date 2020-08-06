import React from 'react';

export const Tranaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const amount = Math.abs(transaction.amount).toFixed(2);

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}
      <span>
        {sign}£{amount}
      </span>
      <button className='delete-btn'>x</button>
    </li>
  );
};
