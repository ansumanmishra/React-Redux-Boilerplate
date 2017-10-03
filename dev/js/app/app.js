import React, {Component} from 'react';

import Header from '../header/header'
import Listuser from '../user/listuser';

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Listuser />
            </div>
        );
    }
}

export default App;