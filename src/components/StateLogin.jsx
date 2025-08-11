import {useState} from "react";

export default function StateLogin() {
    const [enteredValue, setEnteredValue] = useState({
        email: '',
        password: ''
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const emailIsInvalid = didEdit.email && !enteredValue.email.includes('@');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredValue);
    }

    function handleInputChange(identifier, value) {
        setEnteredValue(prevState => ({
            ...(prevState),
            [identifier]: value
        }))
        setDidEdit((prevState) => (
            {
                ...prevState,
                [identifier]: false
            }
        ))
    }

    function handleInputBlur(identifier) {
        setDidEdit((prevState) => (
            {
                ...prevState,
                [identifier]: true
            }
        ))
    }

    return (
        <form>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email"
                           onBlur={() => handleInputBlur('email')}
                           value={enteredValue.email}
                           onChange={event => handleInputChange('email', event.target.value)}/>
                    <div className="control-error">
                        {emailIsInvalid && <p>Please enter a valid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" name="password"
                           value={enteredValue.password}
                           onChange={event => handleInputChange('password', event.target.value)}/>
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button" onClick={handleSubmit}>Login</button>
            </p>
        </form>
    )
}