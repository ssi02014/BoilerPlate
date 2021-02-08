import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const HomeComponent = (props) => {

    //홈페이지 들어오면 useEffect를 실행 1번만
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, []);

    return (
        <>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', 
                width: '100%', height: '100vh'
            }}>
                <h2>시작 페이지</h2>
            </div>
        </>
    );
};

export default withRouter(HomeComponent);