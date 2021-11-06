import React from "react"
import Box from "@mui/material/Box"
import { Header } from "features/Header"

interface LayoutProps {
	children: React.ReactChild
}

const LayoutComponent = ({ children }: LayoutProps) => (
	<Box flexDirection="column">
		<Header />
		<Box>{children}</Box>
	</Box>
)

export const Layout = React.memo(LayoutComponent) as unknown as typeof LayoutComponent
