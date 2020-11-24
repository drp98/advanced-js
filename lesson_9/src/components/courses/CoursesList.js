import React from 'react'
import Course from './Course'
import withToggleId from '../../hoc/withToggleId'

const CoursesList = ({ courses, ...rest }) => {
    return (
        <div>
            {courses.map(course => (
                <Course key={course._id} course={course} {...rest} />
            ))}
        </div>
    )
}

export default withToggleId(CoursesList)
