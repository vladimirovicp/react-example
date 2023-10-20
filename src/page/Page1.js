import {Preloader} from "../components/Preloader";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {RadioDownloadBook} from "../components/RadioDownloadBook"

function Page1() {

    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const downloadDataBooks = (number = '') => {
        const url = `./data/books${number}.json`
        axios.get(url)
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((err) =>{
                console.log(err);
                setLoading(false);
            });
    }

    const selectBook = (number ='') => {
        setLoading(true);

        switch (number) {
            case '2' : downloadDataBooks('2');
            break;
            case '3' : downloadDataBooks('3');
            break;
            default: downloadDataBooks();
        }
    }

    useEffect(() => { downloadDataBooks();}, []);

    return (
        <div className="App">
            <h1>Page1</h1>
            <RadioDownloadBook selectBook={selectBook}/>
            {loading ? (
                <Preloader />
            ) : (
                <React.Fragment>
                    <h2>Таблица</h2>
                    <table className="highlight responsive-table">
                        <thead>
                        <tr>
                            <th>n/n</th>
                            <th>author</th>
                            <th>country</th>
                            <th>language</th>
                            <th>pages</th>
                            <th>title</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            books.map((item,index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td className="z-depth-1">{item.author}</td>
                                    <td className="z-depth-1">{item.country}</td>
                                    <td className="z-depth-1">{item.language}</td>
                                    <td className="z-depth-1">{item.pages}</td>
                                    <td className="z-depth-1">{item.title}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </React.Fragment>
            )}

        </div>
    );
}

export default Page1;
