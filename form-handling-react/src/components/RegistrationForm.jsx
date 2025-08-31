import React, { useState, useEffect} from "react";

function RegistrationForm (){
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState ('');
    const [password,setPassword] = useState ('');

    const [error, setError] = useState ('');

     // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission and page reload

    useEffect (()=>{
        if (!userName || !email || !password)
            return;
        setError("Please fill in all fields.");

        // Clear any previous errors
        setError('');

    console.log("Form submitted successfully:", { userName, email, password });

    })

};
return (
    <div>
        <h1> Fill in form:</h1>
        <form onSubmit={ handleSubmit}>
        <input type="text"
        placeholder="One word of Numbers, letters and underscore only"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}>
        <p>Username</p>
        </input>

        <input type="text"
        placeholder="123@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}>
        <p>Email address</p>
        </input>

        <input type="password"
        placeholder="Atleast 8 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}>
        <p>Password</p>
        </input>

        <button type="submit">

        </button>
        </form>
    </div>
)
};
export default RegistrationForm;