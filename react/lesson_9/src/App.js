import React, { Component } from 'react'
import CoursesList from './components/courses/CoursesList'
import courses from './data'

class App extends Component {
    render() {
        return (
            <div className={'container'}>
                <CoursesList courses={courses} />
            </div>
        )
    }
}

export default App
