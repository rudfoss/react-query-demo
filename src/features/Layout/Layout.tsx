import React from "react"
import { Box, Container, Paper } from "@mui/material"
import { Header } from "features/Header"
import { Outlet } from "react-router"

const LayoutComponent = () => (
	<Box flexDirection="column">
		<Header />
		<Container sx={{ marginTop: 2 }}>
			<Paper sx={{ padding: 2 }}>
				<Outlet />
			</Paper>
		</Container>
	</Box>
)

export const Layout = React.memo(LayoutComponent) as unknown as typeof LayoutComponent
