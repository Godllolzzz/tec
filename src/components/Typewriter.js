import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Typewriter.css"

function TypeWriter(props) {
    console.log(props);
    return (
        <div className='typewriter-parent' >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(props.first,
                            )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(props.second)
                        .pauseFor(1000)
                        .start();

                    setInterval(() => {
                        typewriter
                            .deleteAll()
                            .typeString(props.first)
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString(props.second)
                            .pauseFor(1000)
                            .start();
                    }, 5000); // Repeat the alternation every 5 seconds
                }}
            />
        </div>
    );
}

export default TypeWriter;
