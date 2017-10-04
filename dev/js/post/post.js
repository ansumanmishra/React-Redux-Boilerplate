import React from 'react';

import {connect} from 'react-redux';

class Post extends React.Component {
    showAllPosts() {
        let posts = this.props.posts;
        
        return posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
        });
    }
    render() {
        return(
            <div>
                <hr/>
                <h2>All Posts</h2>
                <ul>{this.showAllPosts()}</ul>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        posts: state.posts
    }
};

export default connect(mapStatetoProps)(Post);