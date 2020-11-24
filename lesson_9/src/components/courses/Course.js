import React from 'react'
import TeachersList from './TeachersList'

const Course = ({ course, toggle, toggleTeachers, openId, openIdTeachers }) => (
    <div className='mt-3'>
        <h3>{course.title}</h3>
        <button
            onClick={() => toggle(course._id)}
            className='btn btn-primary m-1'
        >
            {openId === course._id ? 'Hide description' : 'Show description'}
        </button>
        {openId === course._id ? (
            <>
                <button
                    onClick={() => toggleTeachers(course._id)}
                    className='btn btn-success m-1'
                >
                    {openIdTeachers === course._id
                        ? 'Hide teachers'
                        : 'Show teachers'}
                </button>

                <p className='m-3 text-justify'>{course.description}</p>

                {openIdTeachers === course._id ? (
                    <TeachersList
                        toggleTeachers={toggleTeachers}
                        course={course}
                        openIdTeachers={openIdTeachers}
                    />
                ) : null}
            </>
        ) : null}
    </div>
)

export default Course
