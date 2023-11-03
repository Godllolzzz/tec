import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Typewriter.css"

function TypeWriter() {
    return (
        <div className='typewriter-parent' >
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("DST-TECHNOLOGY ENABLING CENTRE")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('BU-INNOVATION CENTRE')
                        .pauseFor(1000)
                        .start();

                    setInterval(() => {
                        typewriter
                            .deleteAll()
                            .typeString('DST-TECHNOLOGY ENABLING CENTRE')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('BU-INNOVATION CENTRE')
                            .pauseFor(1000)
                            .start();
                    }, 5000); // Repeat the alternation every 5 seconds
                }}
            />
        </div>
    );
}

export default TypeWriter;
