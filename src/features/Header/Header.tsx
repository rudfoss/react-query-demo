import React from "react"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useHeader } from "context/header"
import { Menu } from "features/Menu"

const HeaderComponent = () => {
	const { title, openMenu } = useHeader()
	return (
		<>
			<Menu />
			<AppBar>
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={openMenu}
					>
						<MenuIcon />
					</IconButton>
					<Typography>{title[0]}</Typography>
				</Toolbar>
			</AppBar>
		</>
	)
}

export const Header = React.memo(HeaderComponent) as unknown as typeof HeaderComponent
