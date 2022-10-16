import { useAuth0 } from '@auth0/auth0-react';
import AddMovie from '../components/AddMovie'
import MovieList from './MovieList';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            
            <article className='column'>
                {user?.picture && <img src={user.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <ul>
                    {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]} </li>)}
                </ul>
                <div id="main">
        <h1> Movie List</h1>
          <MovieList/>
          <AddMovie/>
     </div>
            </article>
            
        )
    )
}

export default Profile