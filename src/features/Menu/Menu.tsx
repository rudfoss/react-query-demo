import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer
} from "@mui/material"
import { useHeader } from "context/header"
import React from "react"
import { useLocation, useNavigate } from "react-router"
import { useShortcut } from "utils/useShortcut"
import Home from "@mui/icons-material/Home"

interface MenuItem {
	text: string
	path: string
	icon?: typeof Home
}
export const menuItems: MenuItem[] = [
	{
		path: "/react-query/1",
		text: "1. Start"
	},
	{
		path: "/react-query/2",
		text: "2. Vanilla async"
	},
	{
		path: "/react-query/3",
		text: "3. Robust vanilla async"
	},
	{
		path: "/react-query/4",
		text: "4. First query"
	},
	{
		path: "/react-query/5",
		text: "5. Reuse query"
	},
	{
		path: "/react-query/6",
		text: "6. Error handling"
	},
	{
		path: "/react-query/7",
		text: "7. Parameters"
	}
]

const MenuComponent = () => {
	const navigate = useNavigate()
	const { pathname } = useLocation()
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
					<ListItem button onClick={nav("/")}>
						<ListItemIcon>
							<Home />
						</ListItemIcon>
						<ListItemText>Home</ListItemText>
					</ListItem>
					<Divider />
					{menuItems.map((item) => (
						<ListItemButton
							key={item.path}
							onClick={nav(item.path)}
							selected={pathname === item.path}
						>
							{item.icon && (
								<ListItemIcon>
									<item.icon />
								</ListItemIcon>
							)}
							<ListItemText>{item.text}</ListItemText>
						</ListItemButton>
					))}
				</List>
			</Box>
		</SwipeableDrawer>
	)
}

export const Menu = React.memo(MenuComponent) as unknown as typeof MenuComponent
