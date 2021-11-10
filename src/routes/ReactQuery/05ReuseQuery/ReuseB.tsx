import { CircularProgress, Paper, Typography } from "@mui/material"
import { useUsers } from "api/useUsers"
import { useUser } from "api/useUser"
import React, { useState } from "react"

const ReuseBComponent = () => {
	const { data: users = [] } = useUsers()
	const [selectedUserIndex, setSelectedUserIndex] = useState(1)
	const { data: user, isLoading, isFetching } = useUser(selectedUserIndex)
	const selectNextUser = () => setSelectedUserIndex(((selectedUserIndex + 1) % users.length) + 1)

	return (
		<Paper
			sx={{ padding: 2, flexGrow: 1, margin: 1, cursor: "pointer", userSelect: "none" }}
			elevation={5}
			onClick={selectNextUser}
		>
			{isLoading && <CircularProgress />}
			{!isLoading && (
				<Typography>
					Users #{selectedUserIndex} {isFetching && <CircularProgress size={12} />}
				</Typography>
			)}
			{user && <Typography>Name: {user.name}</Typography>}
		</Paper>
	)
}

export const ReuseB = React.memo(ReuseBComponent) as unknown as typeof ReuseBComponent
