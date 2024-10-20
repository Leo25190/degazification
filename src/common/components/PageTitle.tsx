const PageTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <h1>{children}</h1>
            <hr />
        </>
    );
};

export default PageTitle;
