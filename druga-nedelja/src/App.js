
import './App.css';

//pet cas - reducer-vezba

// import {useReducer, useState} from 'react';
// import korisnikReducer from './reducer-vezba/korisnikReducer';
// import {ADD_USER, REMOVE_USER} from './reducer-vezba/actions';

// const defaultUsers = [
//   {name: 'user1', id: 0}
// ];


//_________________________________________________

//pet cas - router-DOM

import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import {Home, Users, About, UserItem} from './router-DOM/components'
import UsersContextProvider from './router-DOM/context/UsersContext';

// ________________________________________________

function App() {

  // ______________________________________
  //peti cas - reducer-vezba

    // const [users, dispatchUser] = useReducer(korisnikReducer, defaultUsers);
    // const [inputState, setInputState] = useState('');

    // const handleSubmit = e => {
    //   e.preventDefault();
    //   dispatchUser({type: ADD_USER, payload: {name: inputState,}});
    // }

    // const handleRemove = (id) => {
    //   dispatchUser({
    //     type: REMOVE_USER,
    //     payload: {id}
    //   });
    // }

  return (
    <div className="App">
      {/* <div>{users.map(user => <li key={user.id}>{user.name}<button onClick={() => handleRemove(user.id)}>remove</button></li>)}</div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={inputState} onChange={e => setInputState(e.target.value)} />
        <input type='submit' value='dodaj korisnika' />
      </form> */}


      {/* _____________________________________________ */}

      {/* peti cas - router-DOM */}

      {/* Router nam omogucava upotrebu rutiranja u celoj aplikaciji - wrapper */}
      <UsersContextProvider>
        <Router>
          <div className='navbar'>
            {/* Link komponenta za navigaciju ka razlicitim rutama
            Svaki link ima svoj 'to' prop koji definise putanju ka odgovarajucoj ruti */}
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
          </div> 
            {/* Unutar Routes komponente definisu se pojedinacne rute */}

          <Routes>
            {/* Svaka ruta ima svoj 'path' prop koji definise putanju ka kojoj ruta vodi,
            i 'element' prop koji sadrzi komponentu koja se renderuje kad se ruta poklopi sa trenutnom putanjom */}
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
            <Route path='users/:userId' element={<UserItem />} />
            <Route path='/' element={<Home />} />
          </Routes>            
        </Router>
      </UsersContextProvider>

    </div>
  );
}
//import UserItem from './router-DOM/components/UserItem';

export default App;
