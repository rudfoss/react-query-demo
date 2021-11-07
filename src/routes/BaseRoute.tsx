import { Layout } from "features/Layout"
import React from "react"
import { Navigate, Route, Routes } from "react-router"
import { Home } from "./Home"
import { NotFound } from "./NotFound"
import { GetStarted } from "./ReactQuery/01GetStarted"
import { VanillaAsync } from "./ReactQuery/02VanillaAsync"
import { RobustVanillaAsync } from "./ReactQuery/03RobustVanillaAsync"
import { ReactQueryContainer } from "./ReactQuery/Container"

const BaseRouteComponent = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="react-query" element={<ReactQueryContainer />}>
				<Route index element={<Navigate to="1" />} />
				<Route path="1" element={<GetStarted />} />
				<Route path="2" element={<VanillaAsync />} />
				<Route path="3" element={<RobustVanillaAsync />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
)

export const BaseRoute = React.memo(BaseRouteComponent) as unknown as typeof BaseRouteComponent
