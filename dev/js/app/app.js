import React, {Component} from 'react';

import Header from '../layout/header';
import Footer from '../layout/footer';
import Listuser from '../user/listuser';

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Listuser />
                <Footer />
            </div>
        );
    }
}

export default App;