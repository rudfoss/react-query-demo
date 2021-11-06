import { useHeaderTitle } from "context/header"
import React from "react"

const HomeComponent = () => {
	useHeaderTitle("React-Query")
	return <div>Hello from home</div>
}

export const Home = React.memo(HomeComponent) as unknown as typeof HomeComponent
