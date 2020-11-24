import React from 'react'
import PropTypes from 'prop-types'

const ListItem = (props) => {
    return (
        <li className="list-group-item">
            {props.item}
        </li>
    )
}

ListItem.propTypes = {
    item: PropTypes.string.isRequired
}


export default ListItem