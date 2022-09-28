import React from 'react';

interface InputProps {
  type: string;
  value: any;
  placeholder?: string;
  isDisabled?: boolean;
  onInput?: (value: string) => void;
  id?: string;
}

function Input({
  type,
  value,
  placeholder,
  isDisabled,
  onInput,
  id,
}: InputProps) {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onInput === undefined) return;
    const { target } = event;
    const { value } = target;
    onInput(value);
  };

  return (
    <input
      className="border border-gray-400 rounded-sm text-black px-1.5 py-1"
      type={type}
      placeholder={placeholder}
      value={value}
      disabled={isDisabled}
      onInput={handleInput}
      id={id}
    />
  );
}

export default Input;
