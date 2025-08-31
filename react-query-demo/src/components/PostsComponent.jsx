import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, refetch, isRefetching } = useQuery({ 
        queryKey: ['posts'], 
        queryFn: fetchPosts 
    });

    if (isLoading) {
        return <div className="text-center text-blue-500">Loading posts...</div>;
    }

    if (isError) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Blog Posts</h1>
                <button 
                    onClick={() => refetch()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    disabled={isRefetching}
                >
                    {isRefetching ? 'Refetching...' : 'Refetch Data'}
                </button>
            </div>
            <ul className="space-y-4">
                {data.map(post => (
                    <li key={post.id} className="p-4 border rounded-md shadow-sm bg-white">
                        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                        <p className="text-gray-600 mt-2">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;