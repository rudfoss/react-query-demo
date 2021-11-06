import React from "react"
import { Route, Routes } from "react-router"
import { Home } from "./Home"

const BaseRouteComponent = () => (
	<Routes>
		<Route path="/" element={<Home />} />
	</Routes>
)

export const BaseRoute = React.memo(BaseRouteComponent) as unknown as typeof BaseRouteComponent
