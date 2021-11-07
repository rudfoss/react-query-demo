import {
	Alert,
	AlertTitle,
	Button,
	CircularProgress,
	List,
	ListItem,
	ListItemText,
	Typography
} from "@mui/material"
import { User } from "api/jsonPlaceholder"
import { useHeaderTitle } from "context/header"
import React, { useState } from "react"
import { delayedFetch } from "utils/delayedFetch"

type FetchState = "idle" | "loading" | "success" | "error"

const fetchUsers = async (): Promise<User[]> => {
	const response = await delayedFetch()("https://jsonplaceholder.typicode.com/users")
	// throw new Error("Oopsie")
	return response.json()
}

const RobustVanillaAsyncComponent = () => {
	useHeaderTitle("More robust fetch")
	const [fetchState, setFetchState] = useState<FetchState>("idle")
	const [users, setUsers] = useState<User[]>([])
	const doFetch = async () => {
		try {
			setFetchState("loading")
			const result = await fetchUsers()
			setFetchState("success")
			setUsers(result)
		} catch (error) {
			setFetchState("error")
			console.error(error)
		}
	}

	return (
		<>
			<Typography>Here is a slightly more advanced version that handles state changes.</Typography>
			<Button variant="contained" onClick={doFetch} disabled={fetchState === "loading"}>
				Fetch
			</Button>
			<List dense>
				{fetchState === "idle" && (
					<ListItem>
						<ListItemText>No data fetched yet. Click button to begin.</ListItemText>
					</ListItem>
				)}
				{fetchState === "loading" && (
					<ListItem>
						<ListItemText>
							<CircularProgress />
						</ListItemText>
					</ListItem>
				)}
				{fetchState === "error" && (
					<ListItem>
						<Alert severity="error">
							<AlertTitle>Failed to fetch data</AlertTitle>
							Something went wrong when fetching data.
						</Alert>
					</ListItem>
				)}
				{fetchState === "success" &&
					users.map((user) => (
						<ListItem key={user.id}>
							<ListItemText primary={user.name} secondary={user.email} />
						</ListItem>
					))}
			</List>
		</>
	)
}

export const RobustVanillaAsync = React.memo(
	RobustVanillaAsyncComponent
) as unknown as typeof RobustVanillaAsyncComponent
