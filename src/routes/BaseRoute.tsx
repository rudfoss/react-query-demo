import { Layout } from "features/Layout"
import React from "react"
import { Navigate, Route, Routes } from "react-router"
import { Home } from "./Home"
import { NotFound } from "./NotFound"
import { GetStarted } from "./ReactQuery/01GetStarted"
import { VanillaAsync } from "./ReactQuery/02VanillaAsync"
import { RobustVanillaAsync } from "./ReactQuery/03RobustVanillaAsync"
import { FirstQuery } from "./ReactQuery/04FirstQuery"
import { ReuseQuery } from "./ReactQuery/05ReuseQuery"
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
				<Route path="4" element={<FirstQuery />} />
				<Route path="5" element={<ReuseQuery />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
)

export const BaseRoute = React.memo(BaseRouteComponent) as unknown as typeof BaseRouteComponent
