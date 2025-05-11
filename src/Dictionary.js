import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        setResults(response.data);

    }
    
    function handleKeywordChange(event) {
        setKeyword(event.target.value);

    }

    function search(event) {
        event.preventDefault();

        let apiKey ="993a6b7650e8d3940tof6da3ca59d8f7";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        
        axios.get(apiUrl).then(handleResponse);
    }

    return(
        <div className="Dictionary">
            <section>
            <h1>What word do you want to look up?</h1>
            <form onSubmit={search}>
                <input type="search" placeholder="type a word here e.g. Dream" onChange={handleKeywordChange}/>
            </form>
            </section>
            <Results results={results}/>
        </div>
    )
}