import React from 'react'

const TeachersList = ({ course }) => {
    return (
        <>
            <p className='font-weight-bold m-3'>Преподаватели:</p>
            <div className='m-3'>
                {course.teachers.map(teacher => (
                    <React.Fragment key={teacher._id}>
                        <p className='mt-3 ml-3 mr-3 font-weight-bold'>
                            {teacher.name}
                        </p>
                        <div className='text-justify m-3'>
                            {teacher.text}
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default TeachersList
