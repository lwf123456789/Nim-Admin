import React from 'react';
interface CustomInputProps {
  label: string;
  placeholder: string;
  type?: 'text' | 'textarea';
  rows?: number;
  disabled?: boolean;
  focus?: boolean;
  value?: string;
  onChange?: any;
  showCharCount?: boolean;
  maxLength?: number;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  type = 'text',
  rows = 3,
  disabled = false,
  focus = false,
  value = '',
  onChange,
  showCharCount = false,
  maxLength = 200,
}) => {
  const baseStyles = 'w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition';
  const borderStyles = focus ? 'border-primary' : 'border-stroke';
  const disabledStyles = disabled ? 'disabled:cursor-not-allowed disabled:bg-whiter dark:disabled:bg-black' : '';
  const focusStyles = 'focus:border-primary active:border-primary';
  const darkStyles = 'dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary';
  
  const inputClasses = `${baseStyles} ${borderStyles} ${disabledStyles} ${focusStyles} ${darkStyles}`;

  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={inputClasses}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          className={inputClasses}
        />
      )}
      {showCharCount && (
        <div className="text-right text-sm text-gray-600 dark:text-gray-400">
          {value.length} / {maxLength}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
