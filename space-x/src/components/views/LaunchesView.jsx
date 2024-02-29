import {useState} from 'react';

const LaunchesView = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        api.get('/launches')
        .then(res => {
            console.log(res);
            setState(res.data);
        });    
    }, []);

    return <>
        <h1>LaunchesView</h1>
    </>
}

export default LaunchesView;