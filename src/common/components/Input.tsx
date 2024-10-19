interface Props {
    id: string;
    type: "text";
    label: string;
    value: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RowInput: React.FC<Props> = ({ id, type, label, value, onChange, className }) => {
    return (
        <div className={className}>
            <label className="form-label" htmlFor={id}>
                {label}
            </label>
            <input type={type} id={id} className="form-control" value={value} onChange={onChange} />
        </div>
    );
};

export default RowInput;
