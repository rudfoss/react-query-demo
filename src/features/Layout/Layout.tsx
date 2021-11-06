import React from "react"
import Box from "@mui/material/Box"
import { AppBar } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"

interface LayoutProps {
	children: React.ReactChild
}

const LayoutComponent = ({ children }: LayoutProps) => (
	<Box flexDirection="column">
		<AppBar>
			<Toolbar>
				<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
					<MenuIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
		<Box>{children}</Box>
	</Box>
)

export const Layout = React.memo(LayoutComponent) as unknown as typeof LayoutComponent
