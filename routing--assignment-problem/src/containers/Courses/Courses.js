import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Course from '../Course/Course'; 

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        selectedPostId: null,
    }
    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
        //after http request 
        console.log('id:' + id); 
        //this.props.history.push( '/posts/' + id); 
     }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <Link to={this.props.match.url +'/' + course.id + '/' + course.title} key={course.id} >
                            <article 
                            clicked={() => this.postSelectedHandler(course.id)}
                            className="Course">{course.title}</article>
                            </Link>;
                        } )
                    }
                </section>
                <Route path={this.props.match.url + '/:id' + '/:title'} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;