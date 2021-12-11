import React from 'react';
import '../App.css';

const list = [
    { id: '1', name: 'Frontend' },
    { id: '2', name: 'Backend' },
    { id: '3', name: 'Relational Database' },
    { id: '4', name: 'MVC' },
    { id: '5', name: 'RESTful APIs' },
    { id: '6', name: 'Ruby on Rails' },
    { id: '7', name: 'Go' },
];

const Search: React.FC = () => {

    return (
        <>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">{'Search blog posts'}</span>
                </label>
                <input type="text" id="header-search" placeholder="Search blog posts" name="s" />
                <button type="submit">{'Search'}</button>
            </form>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Search;
