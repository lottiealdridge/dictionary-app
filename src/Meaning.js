import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
    console.log(props.meaning)
    return (
        <div className="meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>
                <strong>Definition: </strong>{props.meaning.definition}
                <br />
                <Example example={props.meaning.example}/>
                <br />
                <Synonyms synonyms={props.meaning.synonyms}/>
            </p>

        </div>
    )
}