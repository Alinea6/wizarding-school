import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            login: '',
            email: '',
            password: ''
        }
    }

    onLoginChange = (event) => {
        this.setState({login: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3003/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                login: this.state.login,
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => response.json())
        .then(user =>{
            if (user.login && user.hash && user.hash) {
                console.log("Użytkownik został pomyślnie zarejestrowany")
            } else {
                console.log("Błędne dane użytkownika")
            }
        }).catch(error => {"Error during registration"})
    }
    
    render() {
        return (
            <main className="pa4 black-80">
                <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f3 silver fw6 ph0 mh0 tc">Rejestracja</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 silver" htmlFor="login">Login</label>
                        <input 
                        className="pa2 input-reset ba silver bg-black hover-white w-100" 
                        type="text" 
                        name="login" 
                        id="login"
                        onChange={this.onLoginChange} />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 silver" htmlFor="email-adress">Email</label>
                        <input 
                        className="pa2 input-reset ba silver bg-black hover-white w-100" 
                        type="email-adress" 
                        name="email-adress" 
                        id="email-adress"
                        onChange={this.onEmailChange} />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 silver" htmlFor="password">Hasło</label>
                        <input 
                        className="b pa2 input-reset ba silver bg-black hover-white w-100" 
                        type="password" 
                        name="password"  
                        id="password"
                        onChange={this.onPasswordChange} />
                    </div>
                    </fieldset>
                    <div className="">
                    <input
                    className="b ph3 pv2 input-reset ba b--black bg-black grow pointer f6 silver dib" 
                    type="submit" 
                    value="Zarejestruj się"
                    onClick={this.onSubmitRegister} />
                    </div>
                    <div className="lh-copy mt3">
                    <p className="f6 silver link dim black db tl"><Link to='/login' style={{ textDecoration: 'none', color: '#999999'}}>Logowanie</Link></p>
                    </div>
                </div>
            </main>
        );
    }
}

export default Register;