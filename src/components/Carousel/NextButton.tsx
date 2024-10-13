const NextButton = ({ onClick }: { onClick: () => void }) => (
    <button className="carousel-control-next" type="button" onClick={onClick}>
        <span className="carousel-control-next-icon" aria-hidden="true" />
    </button>
);

export default NextButton;
