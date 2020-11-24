import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <>
            <input onChange={props.onChange} value={props.value} type='text' className="form-control" placeholder="type a user"></input><br/>
        </>
    )
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Input