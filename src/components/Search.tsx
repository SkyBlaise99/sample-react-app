import React, { useState } from 'react';
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

const filterList = (list: any, query: string) => {
    if (!query) {
        return list;
    }

    return list.filter((item: any) => {
        return item.name.toLowerCase().includes(query);
    });
};

const Search: React.FC = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredList = filterList(list, searchQuery);

    return (
        <>
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">{'Search blog posts'}</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search list"
                    name="s"
                    value={searchQuery}
                    onInput={(e) => setSearchQuery((e.target as HTMLInputElement).value)}
                />
                <button type="submit">{'Search'}</button>
            </form>
            <ul>
                {filteredList.map((item: any) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </>
    );
};

export default Search;
