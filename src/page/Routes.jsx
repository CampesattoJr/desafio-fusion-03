import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}