import React from 'react';

const SignIn = () => {
    return (
        <main className="pa4 black-80">
            <form className="measure center">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f3 silver fw6 ph0 mh0 tc">Logowanie</legend>
                <div class="mt3">
                    <label className="db fw6 lh-copy f6 silver" for="login">Login</label>
                    <input className="pa2 input-reset ba bg-black hover-white w-100" type="login" name="login" id="login" />
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 silver" for="password">Hasło</label>
                    <input className="b pa2 input-reset ba bg-black hover-white w-100" type="password" name="password"  id="password" />
                </div>
                </fieldset>
                <div className="">
                <input className="b ph3 pv2 input-reset ba b--black bg-black grow pointer f6 silver dib" type="submit" value="Zaloguj" />
                </div>
                <div className="lh-copy mt3">
                <a href="#0" class="f6 silver link dim black db">Zarejestruj się</a>
                <a href="#0" class="f6 silver link dim black db">Zapomniałeś hasła?</a>
                </div>
            </form>
        </main>

    )
}

export default SignIn;