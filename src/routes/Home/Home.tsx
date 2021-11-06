import React from "react"

const HomeComponent = () => {
	return <div>Hello from home</div>
}

export const Home = React.memo(HomeComponent) as unknown as typeof HomeComponent
