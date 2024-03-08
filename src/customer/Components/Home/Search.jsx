import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';

const Search = () => {
    const [query, setQuery] = useState('');
    const [productArr, setProductsArr] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log('Search query:', query); // Add this line
        const res = await fetch(`http://localhost:5454/api/products/search/${query}`); // Use backticks for string interpolation
        const searchedProducts = await res.json();
        console.log('Search results:', searchedProducts.data); // Add this line
        setProductsArr((prevProductArr) => [...prevProductArr, ...searchedProducts.data]);
        console.log('Updated productArr:', productArr); // Add this line
        navigate(`/SearchResults?query=${query}`);
    };
    console.log('productArr:', productArr); // Add this line

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
            <SearchResults productArr={productArr} />

        </form>
    );
};

export default Search;
