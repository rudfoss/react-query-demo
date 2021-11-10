import {
	Button,
	CircularProgress,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography
} from "@mui/material"
import { User } from "api/jsonPlaceholder"
import { useUsers } from "api/useUsers"
import { useHeaderTitle } from "context/header"
import React, { useState } from "react"
import { useQuery } from "react-query"
import { delayedFetch } from "utils/delayedFetch"

const fetchUsers = async (): Promise<User[]> => {
	const response = await delayedFetch()("https://jsonplaceholder.typicode.com/users")
	// throw new Error("Oopsie")
	return response.json()
}

const FirstQueryComponent = () => {
	useHeaderTitle("First react-query query")
	const [enableQuery, setEnableQuery] = useState(false)
	const { data = [], isLoading, isFetching, refetch } = useUsers()

	const fetchQuery = () => {
		if (!enableQuery) {
			setEnableQuery(true)
			return
		}
		refetch()
	}

	return (
		<>
			<Typography>
				Let's try again with React-Query. This query introduces a fake delay so we can observe state
				changes.
			</Typography>
			<Button variant="contained" onClick={fetchQuery} disabled={isFetching}>
				Fetch
			</Button>
			<List dense>
				{isLoading && (
					<ListItem>
						<ListItemText>
							<CircularProgress />
						</ListItemText>
					</ListItem>
				)}
				{data.map((user) => (
					<ListItem key={user.id}>
						<ListItemText primary={user.name} secondary={user.email} />
					</ListItem>
				))}
				{!isLoading && isFetching && (
					<ListItem>
						<ListItemIcon>
							<CircularProgress />
						</ListItemIcon>
						<ListItemText>Refetching...</ListItemText>
					</ListItem>
				)}
			</List>
		</>
	)
}

export const FirstQuery = React.memo(FirstQueryComponent) as unknown as typeof FirstQueryComponent
