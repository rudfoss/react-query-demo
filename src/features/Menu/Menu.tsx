import { List, ListItem, ListItemText, SwipeableDrawer } from "@mui/material"
import { useHeader } from "context/header"
import React from "react"
import { useShortcut } from "utils/useShortcut"

interface MenuItem {
	text: string
	path: string
}
const menuItems: MenuItem[] = [
	{
		text: "Home",
		path: "/"
	}
]

const MenuComponent = () => {
	const { menuOpen, openMenu } = useHeader()
	const swipeOpen = () => menuOpen[1](true)
	const onClose = () => menuOpen[1](false)

	useShortcut("Alt+M", openMenu)

	return (
		<SwipeableDrawer open={menuOpen[0]} onOpen={swipeOpen} onClose={onClose}>
			<List>
				<ListItem>
					<ListItemText>Home</ListItemText>
				</ListItem>
			</List>
		</SwipeableDrawer>
	)
}

export const Menu = React.memo(MenuComponent) as unknown as typeof MenuComponent
