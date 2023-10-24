import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';

export default function useRequestData(source) {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    
    const getData = useCallback(() => {
        console.log('fg')
        axios.get(source)
            .then(response => {
                setBooks(response.data);
                
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
        }, [source])
    
    useEffect(() => {
        getData(source);
      }, [getData, source]);
    
    
    return {books, getData, loading}
}