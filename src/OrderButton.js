import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderButton() {
    return (
        <div>
            <Link to='/pizza'><button>Order</button></Link>
        </div>
    )
}
