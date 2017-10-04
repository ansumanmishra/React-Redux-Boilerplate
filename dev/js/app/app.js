import React, {Component} from 'react';

import Header from '../layout/header';
import Footer from '../layout/footer';
import Listuser from '../user/user_container';
import Post from '../post/post';

class App extends Component {
    render() {
        return(
            <div className="container">
                <Header />
                <Listuser />
                <Post />
                <Footer />
            </div>
        );
    }
}

export default App;