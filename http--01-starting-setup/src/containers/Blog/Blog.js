import React, { Component } from 'react';
import classes from './Blog.module.css';
//import axios from 'axios';
//Use own axios.js 
//To use instance URL to overide the global URL
import axios from '../../axios';
import Posts from '../Blog/Posts/Posts'; 
import NewPost from './NewPost/NewPost'; 
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'; 
import FullPost from './FullPost/FullPost'; 

class Blog extends Component {
   
    render () {
    
        return (
            <div>
                <header className='Blog'>
                    <ul>
                        <li><NavLink to='/posts/'
                                  exact
                                  activeClassName="my-active"
                                  activeStyle={{
                                      color: '#fa923f',
                                      textDecoration: 'underline'
                                  }}>Home</NavLink></li>
                      
                        <li><NavLink to={{
                            pathname: '/newpost',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New post</NavLink></li>
                    </ul>
                </header>
                
                <Switch>
                <Route path='/newpost' component={NewPost}/>
                <Route path='/posts' component={Posts}/>
              
                </Switch>
               
            </div>
        );
    }
}

export default Blog;