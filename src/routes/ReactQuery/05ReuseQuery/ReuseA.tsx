import { CircularProgress, Paper, Typography } from "@mui/material"
import { useUsers } from "api/useUsers"
import React, { useMemo, useState } from "react"

const ReuseAComponent = () => {
	const { data: users = [], isLoading, isFetching } = useUsers()

	const [selectedUserIndex, setSelectedUserIndex] = useState(0)
	const selectedUser = useMemo(() => users[selectedUserIndex], [selectedUserIndex, users])
	const selectNextUser = () => setSelectedUserIndex((selectedUserIndex + 1) % users.length)

	return (
		<Paper
			sx={{ padding: 2, flexGrow: 1, margin: 1, cursor: "pointer", userSelect: "none" }}
			elevation={5}
			onClick={selectNextUser}
		>
			{isLoading && <CircularProgress />}
			{!isLoading && (
				<Typography>
					Users: {users.length}, #{selectedUserIndex} {isFetching && <CircularProgress size={12} />}
				</Typography>
			)}
			{selectedUser && <Typography>Name: {selectedUser.name}</Typography>}
		</Paper>
	)
}

export const ReuseA = React.memo(ReuseAComponent) as unknown as typeof ReuseAComponent
