import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Form from './Form';

function App() {
    return (
        <div>
            <Header />

            <h1 class="introHeader">Fill in the participants</h1>
            <Form />

            <Footer />
        </div>
    );
}

export default App;