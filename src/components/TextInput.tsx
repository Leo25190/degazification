import React from "react";

interface TextInputProps {
    value: string;
    type: "text" | "number";
    name: string;
    label: string;
    emptiable?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Functional component without React.FC
const TextInput = ({ type, value, name, label, onChange }: TextInputProps) => {
    return (
        <div className="form-floating">
            <input
                type={type}
                className={"form-control form-control-sm"}
                placeholder={label}
                id={name}
                name={name}
                value={value}
                onChange={onChange} // Directly passing the onChange prop
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};

export default TextInput;
