import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}