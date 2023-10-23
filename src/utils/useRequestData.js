import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function useRequestData(source) {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState(source)
    
    useEffect(() => {
        console.log(query)
        axios.get(query)
            .then(response => {
                setBooks(response.data);
                
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, [query])
    
    
    return {books, query, setQuery, loading}
}