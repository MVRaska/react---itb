import {useState, useEffect} from 'react';
import LaunchesList from '../launches/LaunchesList';
import api from '../../axios/api';

const LaunchesView = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        api.get('/launches')
        .then(res => {
            console.log(res);
            setLaunches(res.data.slice(0, 10));
        });    
    }, []);

    return <>
        <h1>Launches View</h1>
        {launches.length ? <LaunchesList launches={launches} /> : null}
    </>
}

export default LaunchesView;