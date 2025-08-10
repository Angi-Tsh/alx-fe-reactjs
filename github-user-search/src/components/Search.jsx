import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        setUserData(null);
        setError(null);
        setIsLoading(true);

        try {
            const data = await fetchUserData(username);
            if (data) {
                setUserData(data);
            } else {
                setError("Looks like we cant find the user");
            }
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    const renderContent = () => {
        if (isLoading) {
            return <p>Loading...</p>;
        }
        if (error) {
            return <p className="error-message">{error}</p>;
        }
        if (userData) {
            return (
                <div className="user-profile">
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
                    <h3>{userData.name}</h3>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View GitHub Profile
                    </a>
                </div>
            );
        }
        return null;
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
                <button type="submit">Search</button>
            </form>
            {renderContent()}
        </div>
    );
};

export default Search;