import React, { Component } from 'react';
import axios from '../../../axios';
import classes from '../Posts/Posts.module.css'; 
import Post from '../../../components/Post/Post'; 
import {Link, Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost'; 

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount () {
        //console.log(this.props)
        axios.get('/posts')
        .then(response => {
            //only fetch the first 4 posts
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Mon'
                }
            });
            //this.setState({posts: response.data})
            this.setState({posts: updatedPosts})
            //console.log(response);
        }) 
        .catch( error => {
            console.log(error);
            this.setState({error: true})
        });
    }
    postSelectedHandler = (id) => {
       this.setState({selectedPostId: id});
       //after http request 
       //console.log('id:' + id); 
       //this.props.history.push( '/posts/' + id); 
    }
    render() {
        let posts = <p>Something went wrong</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                   <Link to={'/posts/'+ post.id} key={post.id} >
                    <Post  
                //key={post.id}
                title={post.title} 
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>   
                   </Link>
                );
            }); 
        }
        return (
            <div>
                <section className="Posts">
                 {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
             

            </div>

        )
    }

}
export default Posts; 