import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/SearchResults/${query}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="relative flex items-center mx-4">
                <input
                    type="text"
                    style={{ color: 'black', width: '500px' }}
                    placeholder="Search..."
                    value={query}
                    className="border border-gray-300 rounded-md px-10 py-2 mr-10 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <SearchIcon />
                </button>
            </div>
        </form>
    );
};

export default Search;
