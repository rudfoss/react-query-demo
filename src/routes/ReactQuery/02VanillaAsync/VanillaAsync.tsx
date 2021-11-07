import { Button, List, ListItem, ListItemText, Typography } from "@mui/material"
import { User } from "api/jsonPlaceholder"
import { useHeaderTitle } from "context/header"
import React, { useState } from "react"
import { delayedFetch } from "utils/delayedFetch"

const fetchUsers = async (): Promise<User[]> => {
	const response = await delayedFetch()("https://jsonplaceholder.typicode.com/users")
	// throw new Error("Oopsie")
	return response.json()
}

const VanillaAsyncComponent = () => {
	useHeaderTitle("Vanilla fetch")
	const [users, setUsers] = useState<User[]>([])
	const doFetch = async () => {
		const data = await fetchUsers()
		setUsers(data)
	}

	return (
		<>
			<Typography>
				This component performs a very simple (but naive) fetch operation without any error handling
				or state controls.
			</Typography>
			<Button variant="contained" onClick={doFetch}>
				Fetch
			</Button>
			<List dense>
				{users.length === 0 && (
					<ListItem>
						<ListItemText>No data</ListItemText>
					</ListItem>
				)}
				{users.map((user) => (
					<ListItem key={user.id}>
						<ListItemText primary={user.name} secondary={user.email} />
					</ListItem>
				))}
			</List>
		</>
	)
}

export const VanillaAsync = React.memo(
	VanillaAsyncComponent
) as unknown as typeof VanillaAsyncComponent
