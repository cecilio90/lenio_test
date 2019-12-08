import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import MemberIndex from './members/MemberIndex';
import MemberShow from './members/MemberShow';
import Header from './Header';
import Footer from './Footer';
import '../App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="main">
                <Route path="/" exact component={MemberIndex} />
                <Route path="/member/:id" exact component={MemberShow} />
            </div>
            <Footer />
        </BrowserRouter>
    )
};

export default App;