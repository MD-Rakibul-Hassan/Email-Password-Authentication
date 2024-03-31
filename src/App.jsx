import Navbar from "./components/Header/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default App;