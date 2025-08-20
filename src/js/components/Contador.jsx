import React from 'react';

function SecondsCounter({ seconds }) {
    return (
        <div className="text-center mt-5">
            <h1>Contador</h1>
            <h2>{seconds}</h2>
        </div>
    );
}

export default SecondsCounter;
