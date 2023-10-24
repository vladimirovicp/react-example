import React, {useState} from 'react';

const RadioDownloadBook = (props) => {

    const {setQuery = Function.prototype} = props;
    const [number, setNumber] = useState('');

    const handleBookFilter = (event) =>{
        setQuery(`./data/books${event.target.dataset.number}.json` || "")
        setNumber(event.target.dataset.number)
    };

    return <div className="settings row">
        <label>
            <input
                className="with-gap"
                name="books"
                type="radio"
                data-number=""
                onChange={handleBookFilter}
                checked={number === ''}
            />
            <span>Books 1</span>
        </label>
        <label>
            <input
                className="with-gap"
                name="books"
                type="radio"
                data-number="2"
                onChange={handleBookFilter}
                checked={number === '2'}
            />
            <span>Books 2</span>
        </label>
        <label>
            <input
                className="with-gap"
                name="books"
                type="radio"
                data-number="3"
                onChange={handleBookFilter}
                checked={number === '3'}
            />
            <span>Books 3</span>
        </label>
    </div>

}

export {RadioDownloadBook}
