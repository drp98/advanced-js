import React from 'react'
import PropTypes from 'prop-types'

class Input  extends React.Component {
    render() {
        return (
            <>
                <input onChange={this.props.onChange} value={this.props.value} type='text' className="form-control" placeholder="type a user"></input><br/>
            </>
        )
    }
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}

export default Input
