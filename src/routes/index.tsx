import { Crew } from "../pages/crew";
import { Technology } from "../pages/technology";
import { Destination } from "../pages/destination";
import { Home } from "../pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/header";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Header />
            
            <Routes>
                <Route path="/space-tourism-website" element={<Home />} />

                <Route path="/space-tourism-website/destination" element={<Destination />} />

                <Route path="/space-tourism-website/crew" element={<Crew />} />

                <Route path="/space-tourism-website/technology" element={<Technology />} />
            </Routes>
        </BrowserRouter>
    )
}