import React from "react"

const NotFoundComponent = () => {
	return <div>Not found</div>
}

export const NotFound = React.memo(NotFoundComponent) as unknown as typeof NotFoundComponent
