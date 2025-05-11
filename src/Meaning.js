import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css"

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>
                <div className="definition">{props.meaning.definition}</div>

                <Example example={props.meaning.example}/>
                <br />
                <Synonyms synonyms={props.meaning.synonyms}/>
            </p>

        </div>
    )
}