import {Preloader} from "../components/Preloader";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Page2() {

    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);


    useEffect(() => {
        axios.get(`./data/books2.json`)
            .then(response => {
                setBooks(response.data);
                setLoading(false);
            })
            .catch((err) =>{
                console.log(err);
                setLoading(false);
            });
    }, []);



    return (
        <div className="App">
            <h1>Page 2</h1>

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

export default Page2;
