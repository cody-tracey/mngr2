import { useContext } from "react";
import AppContext from "../../AppContext";

const Landing = () => {
    const myContext = useContext(AppContext);
    return (
        <div>
            Landing
        </div>
    );
};

export default Landing;