import { Alert, Box, Button, CircularProgress, TextField, Typography } from "@mui/material"
import { useUser } from "api/useUser"
import { useHeaderTitle } from "context/header"
import React, { useState } from "react"

const ParametersComponent = () => {
	useHeaderTitle("Parameters")
	const [userId, setUserId] = useState<number>(1)
	const [fetchUserId, setFetchUserId] = useState<number>(userId)

	const { data: user, isLoading, isFetching } = useUser(fetchUserId)
	const fetchSelectedUser = () => setFetchUserId(userId)

	const onUserIdChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		if (isNaN(evt.target.valueAsNumber)) return
		setUserId(evt.target.valueAsNumber)
	}

	return (
		<>
			<Typography>
				You can use data both as query keys and as parameters to the fetch function. In this way you
				don't have to repeat yourself.
			</Typography>
			<Box sx={{ margin: 4 }}>
				{isLoading && <CircularProgress size={16} />}
				{!isFetching && !user && <Alert severity="warning">No user with ID {fetchUserId}</Alert>}
				{user && (
					<Typography>
						User: {user.name} - {user.email}
					</Typography>
				)}
			</Box>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<TextField label="User id" type="number" value={userId ?? ""} onChange={onUserIdChange} />
				<Button variant="outlined" onClick={fetchSelectedUser}>
					Fetch
				</Button>
			</Box>
		</>
	)
}

export const Parameters = React.memo(ParametersComponent) as unknown as typeof ParametersComponent
