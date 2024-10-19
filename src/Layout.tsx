import { Outlet } from "react-router-dom";
import NavBar from "./common/components/NavBar";
import { Container } from "react-bootstrap";

const Layout = () => {
    return (
        <div>
            <NavBar />
            <main>
                <Container className="mt-3">
                    <Outlet />
                </Container>
            </main>
        </div>
    );
};

export default Layout;
