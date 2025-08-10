import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState(null); // Now stores an array of users
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //include additional input fields for advanced search criteria such as location and minimum repositories.
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setUsers(null);
        setError(null);
        setIsLoading(true);

        try {
            // Update the fetchUserData call to include the new parameters
            // Changed from fetchUserData to fetchUsers
            const data = await fetchUsers(username, location, minRepos);
            if (data && data.items.length > 0) {
                setUsers(data.items);
            } else {
                setError("Looks like we can't find any users matching your criteria.");
            }
        } catch (err) {
            setError("Looks like we can't find any users matching your criteria.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") {
            setUsername(value);
        } else if (name === "location") {
            setLocation(value);
        } else if (name === "minRepos") {
            setMinRepos(value);
        }
    };

    const renderContent = () => {
        if (isLoading) {
            return <p className="text-center text-gray-500 mt-4">Loading...</p>;
        }
        if (error) {
            return <p className="text-center text-red-500 mt-4">{error}</p>;
        }
        if (users && users.length > 0) {
            return (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                    {users.map((user) => (
                        <div key={user.id} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
                            <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-24 h-24 rounded-full mb-4" />
                            <h3 className="text-lg font-semibold">{user.login}</h3>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="mt-2 text-blue-400 hover:underline">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="search-container p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">GitHub User Search</h1>
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
                <input
                    type="text"
                    name="username"
                    placeholder="GitHub Username"
                    value={username}
                    onChange={handleChange}
                    className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={location}
                    onChange={handleChange}
                    className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="number"
                    name="minRepos"
                    placeholder="Min Repositories"
                    value={minRepos}
                    onChange={handleChange}
                    className="flex-1 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-blue-600 hover:bg-white-700 text-blue font-bold py-3 px-6 rounded-lg transition-colors duration-200">
                    Search
                </button>
            </form>
            {renderContent()}
        </div>
    );
};

export default Search;