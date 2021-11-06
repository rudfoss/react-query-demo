import { Box, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from "@mui/material"
import { useHeader } from "context/header"
import React from "react"
import { useNavigate } from "react-router"
import { useShortcut } from "utils/useShortcut"
import Home from "@mui/icons-material/Home"

interface MenuItem {
	text: string
	path: string
	icon?: typeof Home
}
const menuItems: MenuItem[] = [
	{
		text: "Home",
		path: "/",
		icon: Home
	}
]

const MenuComponent = () => {
	const navigate = useNavigate()
	const { menuOpen, openMenu } = useHeader()
	const swipeOpen = () => menuOpen[1](true)
	const onClose = () => menuOpen[1](false)

	useShortcut("Alt+M", openMenu)
	const nav = (path: string) => () => {
		onClose()
		navigate(path)
	}

	return (
		<SwipeableDrawer open={menuOpen[0]} onOpen={swipeOpen} onClose={onClose}>
			<Box sx={{ width: 250 }}>
				<List>
					{menuItems.map((item) => (
						<ListItem button key={item.path} onClick={nav(item.path)}>
							{item.icon && (
								<ListItemIcon>
									<item.icon />
								</ListItemIcon>
							)}
							<ListItemText>Home</ListItemText>
						</ListItem>
					))}
				</List>
			</Box>
		</SwipeableDrawer>
	)
}

export const Menu = React.memo(MenuComponent) as unknown as typeof MenuComponent
