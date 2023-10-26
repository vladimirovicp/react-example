import {Preloader} from "../components/Preloader";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

import {RadioDownloadBook} from "../components/RadioDownloadBook"

import {TableBook} from "../layout/TableBook";

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
                    <TableBook books={books}/>
                </React.Fragment>
            )}

        </div>
    );
}

export default Page1;
