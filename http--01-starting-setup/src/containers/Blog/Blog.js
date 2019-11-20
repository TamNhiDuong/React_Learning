import React, { Component } from 'react';
import classes from './Blog.module.css';
//import axios from 'axios';
//Use own axios.js 
//To use instance URL to overide the global URL
import axios from '../../axios';
import Posts from '../Blog/Posts/Posts'; 
import NewPost from './NewPost/NewPost'; 
import {Route, NavLink} from 'react-router-dom'; 

class Blog extends Component {
   
    render () {
    
        return (
            <div>
                <header className='Blog'>
                    <ul>
                        <li><NavLink to='/'
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
                <Route path='/' exact component={Posts}/>
                <Route path='/newpost' component={NewPost}/>
               
            </div>
        );
    }
}

export default Blog;