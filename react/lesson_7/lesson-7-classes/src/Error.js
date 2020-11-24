import React from 'react'
import PropTypes from 'prop-types'

class Error  extends React.Component {
    render() {
        return (
            <>
                <div className="alert alert-danger">{this.props.message}</div>
            </>
        )
    }
}

Error.propTypes = {
    message: PropTypes.string
}

export default Error