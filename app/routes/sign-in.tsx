import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import type {Route} from "./+types/sign-in";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {login as apiLogin, getUserProfile } from '../api/authService';
import {signInSuccess, setProfile} from '../store/authSlice';

export function loader({} : Route.LoaderArgs) {
    return null;
}

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();

        try {
            const loginData = await apiLogin(email, password);
            const token = loginData.token;

            localStorage.setItem('userToken', token);
            dispatch(signInSuccess({token}));

            const profileData = await getUserProfile(token);
         
            dispatch(setProfile({
                userName: profileData.userName,
                firstName: profileData.firstName,
                lastName: profileData.lastName,
            }));

            navigate('/user', { replace: true });

        } catch (error) {
            console.error('Login Failed:', error);
            const errorMessage = error instanceof Error
                ? error.message
                : 'Une erreur inconnue est survenue.';
            alert(`Échec de la connexion : ${errorMessage}`);
        }
    };

    return (
        <div className="signin">
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle}/>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                 required
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
}