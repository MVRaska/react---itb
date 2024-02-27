import {useParams, useNavigate} from 'react-router-dom';
import {UsersContext} from '../context/UsersContext'

import { useContext, useState, useEffect } from 'react';

const UserItem = () => {
    //kada se koristi useParams moze se pristupiti parametrima koji su deo trenutne putanje
    //u ovom slucaju userId ce sadrzati vrednost parametra useId iz trenutne putanje

    const {userId} = useParams();
    // console.log(userId, typeof userId);
    const {users} = useContext(UsersContext);
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        const user = users.find(user => user.id === parseInt(userId));
        setUser(user);
    }, []);

    return <>
        <h1>User item: {userId}</h1>
        {user ? (
        <div>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>website: {user.website}</p>
        </div>
        ) : (<div>We can't find user</div>)
        }
    </>
}

export default UserItem;