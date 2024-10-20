interface Props {
    type: "text" | "range" | "number";
    id: string;

    label: string;
    value: string | number | readonly string[] | undefined;

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

    className?: string;

    readOnly?: boolean;

    // range specific props
    min?: number;
    max?: number;
    step?: number;
}

const Input: React.FC<Props> = ({ id, type, label, value, onChange, className, readOnly, min, max, step }) => {
    return (
        <div className={className}>
            <label className="form-label" htmlFor={id}>
                {label} <small>{type === "range" && `(${value})`}</small>
            </label>
            {type === "range" && <input type="range" id={id} value={value} min={min} max={max} step={step} onChange={onChange} className="form-range" readOnly={readOnly} />}
            {type === "text" && <input type="text" id={id} value={value} onChange={onChange} className={"form-control" + (readOnly ? "-plaintext" : "")} readOnly={readOnly} />}
            {type === "number" && <input type="number" id={id} value={value} onChange={onChange} className={"form-control" + (readOnly ? "-plaintext" : "")} readOnly={readOnly} />}
        </div>
    );
};

export default Input;
