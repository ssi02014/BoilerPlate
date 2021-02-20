import React, { useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import '../../../scss/Header.scss';
import { useSelector } from 'react-redux';

const Header = (props) => {
    const [login, setLogin] = useState(false);
    const user = useSelector(state => state.user);


    const onClickHandler = () => {
        localStorage.removeItem('userID');

        axios.get('/api/users/logout')
        .then(response => {
            console.log(response);

            if (response.data.success) {
                setLogin(!login);
                props.history.push('/login');
            } else {
                alert("로그아웃하는데 실패하였습니다.");
            }
        })
    }

    return (
        <header>
            <h1 className="header-title"><Link to="/">MINJAE</Link></h1>
            <ul className="header-menu">
                {user.userData && user.userData.isAuth ? 
                <li><Link to="/" onClick={onClickHandler}>Logout</Link></li>
                : 
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Signup</Link></li>
                </>}
            </ul>
        </header>
    );
};

export default withRouter(Header);