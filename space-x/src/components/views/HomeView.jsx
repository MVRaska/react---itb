import {useEffect, useState} from 'react';
import api from '../../axios/api';
import Company from '../company/Company';

const HomeView = () => {
    const [companyInfo, setCompanyInfo] = useState(undefined);

    useEffect(() => {
        api.get('/company')
        .then(res => {
            console.log(res);
            setCompanyInfo(res.data);
        });    
    }, []);

    return <>
        <h1>HomeView</h1>
        <Company companyInfo={companyInfo} />
    </>
}

export default HomeView;