import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <main className="pa4 black-80">
            <div className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 silver fw6 ph0 mh0 tc">Rejestracja</legend>
                <div class="mt3">
                    <label className="db fw6 lh-copy f6 silver" htmlFor="login">Login</label>
                    <input className="pa2 input-reset ba bg-black hover-white w-100" type="text" name="login" id="login" />
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 silver" htmlFor="email-adress">Email</label>
                    <input className="pa2 input-reset ba bg-black hover-white w-100" type="email-adress" name="email-adress" id="login" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 silver" htmlFor="password">Hasło</label>
                    <input className="b pa2 input-reset ba bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input
                className="b ph3 pv2 input-reset ba b--black bg-black grow pointer f6 silver dib" 
                type="submit" 
                value="Zarejestruj się" />
                </div>
                <div className="lh-copy mt3">
                <p className="f6 silver link dim black db tl"><Link to='/login' style={{ textDecoration: 'none', color: '#999999'}}>Logowanie</Link></p>
                </div>
            </div>
        </main>
    );
}

export default Register;