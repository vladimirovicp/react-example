import {Preloader} from "../components/Preloader";

import React, { useState } from 'react';
import {RadioDownloadBook1} from "../components/RadioDownloadBook1";
import useRequestData from "../utils/useRequestData";
import {TableBook} from "../layout/TableBook";

function Page1_1() {
    const [ url, setUrl ] = useState('./data/books.json');
    const { books, loading } = useRequestData(url);
    function handleUrl(e) { setUrl(e) }

    return (
        <div className="App">
            <h1>Page1_1</h1>
            <RadioDownloadBook1 selectBook={handleUrl}/>
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

export default Page1_1;