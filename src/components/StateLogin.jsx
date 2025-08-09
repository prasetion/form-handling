import {useState} from "react";

export default function StateLogin() {
    const [enteredValue, setEnteredValue] = useState({
        email: '',
        password: ''
    })

    function handleInputChange(identifier, value) {
        setEnteredValue(prevState => ({
            ...(prevState),
            [identifier]: value
        }))
    }

    return (
        <div>

        </div>
    )
}