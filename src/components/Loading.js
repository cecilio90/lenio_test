import React, { Component } from 'react';
import { BallBeat } from 'react-pure-loaders';

const Spinner = () => {
    return (
        <div className="loading">
            <BallBeat
            color={'#123abc'}
            loading={true}
            />
        </div>
    )
};

export default Spinner;