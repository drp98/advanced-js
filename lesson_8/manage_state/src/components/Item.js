import React from 'react'
import './Item.css'

const Item = props => {
    const { item } = props
    return (
        <li className='item-box list-group-item'>
            <div className='form-check'>
                <input
                    type='checkbox'
                    className='form-check-item'
                    checked={item.packed}
                    id={item.id}
                    onChange={() => props.toggleItem(item)}
                />
                <label className='form-check-label' htmlFor={item.id}>
                    {item.value}
                </label>
            </div>
            <button
                className='btn btn-danger btn-sm'
                onClick={() => props.removeItem(item.id)}
            >
                Remove
            </button>
        </li>
    )
}

export default Item
