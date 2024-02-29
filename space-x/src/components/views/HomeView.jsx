import {useEffect, useState} from 'react';
import api from '../../axios/api';
import Company from '../components/company/ Company';

const HomeView = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        api.get('/company')
        .then(res => {
            console.log(res);
            setState(res.data);
        });    
    }, []);

    return <>
        <h1>HomeView</h1>
        <Company companyInfo={state} />
    </>
}

export default HomeView;