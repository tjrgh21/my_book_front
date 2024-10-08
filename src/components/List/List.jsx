import React, { useState } from 'react';
import './List.css';
import { SearchBox } from '../Search/SearchBox';


const List = ({ books }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="list-container">
            <SearchBox
                type = {'text'}
                placeholder = {"검색어를 입력해주세요"}
                value = {searchTerm}
                onChange={handleSearchChange} 
            />
            {filteredBooks.map((book, index) => (
                <div key={index} className="book-item">
                    <img src={book.cover} alt={book.title} className="book-cover" />
                    <div className="book-info">
                        <p className="book-title">{book.title}</p>
                        <p className="book-author">{book.author}</p>
                        <p className="book-date">{book.date}</p>
                    </div>
                    <div className="del-book-button">
                        <button><span>삭제</span></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
