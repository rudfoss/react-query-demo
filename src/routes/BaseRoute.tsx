import { Layout } from "features/Layout"
import React from "react"
import { Route, Routes } from "react-router"
import { Home } from "./Home"
import { NotFound } from "./NotFound"

const BaseRouteComponent = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
)

export const BaseRoute = React.memo(BaseRouteComponent) as unknown as typeof BaseRouteComponent
