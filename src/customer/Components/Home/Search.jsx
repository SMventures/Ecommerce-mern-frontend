import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../../Redux/Customers/Product/Action';
import { useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

import Product from '../Product/Product/Product';
const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searchProduct(query));
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="relative flex items-center mx-4">
                <input
                    type="text"
                    style={{ color: "black", width: '500px' }}
                    placeholder="Search..."
                    value={query}
                    className="border border-gray-300 rounded-md px-10 py-2 mr-10 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Search
                </button>
                {query && (
                    <ul>
                        {Product && Product.length > 0 && (
                            <ul>
                                {Product.map((product) => (
                                    <li key={product._id}>
                                        <Link to={`/${product.lavelOne}/${product.lavelTwo}/${product.lavelThree}`}>
                                            {product.lavelThree}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </ul>
                )}
            </div>
        </form>
    );
};

export default Search;