import React from 'react'

class Loader extends React.Component {
    render () {
        return (
            <div className="spinner-border  text-primary m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        )
    }
}

export default Loader