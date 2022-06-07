import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <Link to="/">Landing</Link>
            <Link to="/login">Login</Link>
            <Link to="/home">Home</Link>
        </div>
    )
};

export default Nav;