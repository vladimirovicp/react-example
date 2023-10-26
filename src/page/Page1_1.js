import {Preloader} from "../components/Preloader";

import React, { useState } from 'react';
import {RadioDownloadBook1} from "../components/RadioDownloadBook1";
import useRequestData from "../utils/useRequestData";

function Page1_1() {
    const [ url, setUrl ] = useState('./data/books.json');
    const { books, loading } = useRequestData(url);
    function handleUrl(e) { 
        //console.log(e)
        setUrl(e) 
    }

    return (
        <div className="App">
            <h1>Page1_1</h1>
            <RadioDownloadBook1 selectBook={handleUrl}/>
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

export default Page1_1;