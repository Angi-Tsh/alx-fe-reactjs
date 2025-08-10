import axios from "axios";

//Responsilbe for services that interact with GitHub API therefore do not import React  and components here.
const GitHub_API_URl = "https://api.github.com/users/";
export const fetchUserData = async (username) => {
    try { 
        const response = await axios.get(`${GitHub_API_URl}${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};

export default fetchUserData;