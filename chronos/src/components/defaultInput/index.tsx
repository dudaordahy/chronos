import React from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <div>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input
        id={id}
        type={type}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}