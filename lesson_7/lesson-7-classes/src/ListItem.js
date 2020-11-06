import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
    render () {
        return (
            <li className="list-group-item">
                {this.props.item}
            </li>
        )
    }
}

ListItem.propTypes = {
    item: PropTypes.string.isRequired
}

export default ListItem