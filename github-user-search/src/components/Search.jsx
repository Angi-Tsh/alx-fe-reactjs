import React, {useState} from "react";  

const Search = ({onSearch}) => {
    const [username, setUsername] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(username);
        // Call the onSearch prop with the username
        // Logic to search for the GitHub user
        console.log(`Searching for user: ${username}`);
    };
    const handleChange = (e) => {
        setUsername(e.target.value);
    };


    return (
        <div className="search">
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="GitHub Username" 
                    value={username} 
                    onChange={handleChange} 
                />
                <button type="submit">Search </button>
            </form>
        </div>
    );
    }


export default Search;