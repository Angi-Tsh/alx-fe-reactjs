import axios from 'axios';

const GITHUB_API_URL = "https://api.github.com";

// Function to fetch multiple users based on search criteria
export const fetchUserData = async (username, location, minRepos) => {
    try {
        let query = username;
        if (location) {
            query += ` location:${location}`;
        }
        if (minRepos) {
            query += ` repos:>=${minRepos}`;
        }

        const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
            params: {
                q: query,
                per_page: 30
            }
        });

        if (response.data.items.length > 0) {
            return response.data;
        } else {
            return null;
        }

    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};







