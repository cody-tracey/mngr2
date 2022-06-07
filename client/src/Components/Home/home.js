import { useContext } from "react";
import AppContext from "../../AppContext";

const Home = () => {
    const myContext = useContext(AppContext);
    return (
        <div>
            Home
        </div>
    );
};

export default Home;