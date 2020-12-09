import React from 'react'

export default function CustomBadge({ children }) {
    return (
        <span className=" myBadge badge m-2 px-4 badge-secondary">{children}</span>
    )
}
