const PrevButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button className="carousel-control-prev" type="button" onClick={onClick}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
    );
};

export default PrevButton;
