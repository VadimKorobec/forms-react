import { InputBlur } from "./StateLogin";

interface InputProps {
  id: string;
  title: string;
  type: string;
  name: string;
  value: string;
  onBlur: (field: keyof InputBlur) => void;
  onFocus: (field: keyof InputBlur) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
}

const Input = ({
  id,
  title,
  type,
  name,
  value,
  onBlur,
  onFocus,
  onChange,
  error,
}: InputProps) => {
  return (
    <>
      <div className="control no-margin">
        <label htmlFor={id}>{title}</label>
        <input
          id={id}
          type={type}
          name={name}
          onBlur={() => onBlur("email")}
          onFocus={() => onFocus("email")}
          value={value}
          onChange={onChange}
        />
        <div className="control-error">
          {error && <p>Please enter a valid email address.</p>}
        </div>
      </div>
    </>
  );
};

export default Input;
