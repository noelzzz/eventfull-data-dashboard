import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>There's nothing here!</h1>
            <Link to={'/'}>Back to home</Link>
        </div>
    )
}
