import { List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import React from "react"
import HelpIcon from "@mui/icons-material/Help"
import { useHeaderTitle } from "context/header"

const GetStartedComponent = () => {
	useHeaderTitle("Things to consider")
	return (
		<>
			<Typography>Some things to consider when talking to servers</Typography>
			<List dense>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary="How do I make the request" secondary="Fetch/axios/websockets..." />
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText
						primary="Where do I put the returned data"
						secondary="State/Context/Redux/Zustand..."
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText
						primary="What is the lifecycle of that data"
						secondary="When is it stale? How do I tell? When can I clean up? How do I cancel a request?"
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText
						primary="How do I handle errors"
						secondary="Do I retry? What do I show the user?"
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText
						primary="How do I react to different states"
						secondary="Do I show loading indicators?"
					/>
				</ListItem>
				<ListItem>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText
						primary="How do I avoid unnecessary fetches?"
						secondary="How do I keep track of what is in use?"
					/>
				</ListItem>
			</List>
		</>
	)
}

export const GetStarted = React.memo(GetStartedComponent) as unknown as typeof GetStartedComponent
