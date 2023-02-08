import './SearchMovies.css'
import { useState, useEffect } from "react";
import DisplayMovies from '../DisplayMovies/DisplayMovies';

function SearchMovies() {

    const [ inputValue, setInputValue ] = useState('')
    const [ data, setData ] = useState([])

    let value = '';

    function updateInputValue () {
        setInputValue(value)
    }
    
    const baseUrl = 'http://www.omdbapi.com/?apikey=37fe945a&s='
    const url = (baseUrl + inputValue)

    useEffect(() => {
        async function searchApi() {
            try {
                const response = await fetch (url);
                const data = await response.json();
                setData(data);
                return(data);
            } catch (error) {
                console.log(error.message)
            }
            
        }
        if (inputValue.length > 0) {
            searchApi()
        }
        
    }, [inputValue]); 

    const response = data.Response;
    const movieInfo = data.Search;

    return (
        <div className='wrapper'>
            <h1> The ultimate app for your best movie search! </h1>
            <input className='search__input' type="text" placeholder='Write a movie title'
            onChange={ (event) => { value = event.target.value }}/>
            <button className='search__button' onClick={ updateInputValue } > Search </button>
            { response ? <DisplayMovies movies={ movieInfo } response={ response } /> : '' }
            
        </div>
    )
}

export default SearchMovies