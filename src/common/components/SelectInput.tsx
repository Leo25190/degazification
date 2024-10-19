import { labelWithValue } from "../types";

interface Props {
    id?: string;
    type: "select";
    label: string;
    options: labelWithValue[];
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RowSelectInput: React.FC<Props> = ({ id, label, options, onChange, className }) => {
    return (
        <div className={className}>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <select id={id} onChange={onChange} className="form-select" aria-label="Default select example">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RowSelectInput;
