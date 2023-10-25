import {useState, useEffect} from "react";
import axios from 'axios';

export default function useRequestData(source) {
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
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
    

    
    
    return {books, loading}
}