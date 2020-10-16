import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeButton() {
    return (
        <div>
             <Link to='/'><button>Home</button></Link>
        </div>
    )
}
