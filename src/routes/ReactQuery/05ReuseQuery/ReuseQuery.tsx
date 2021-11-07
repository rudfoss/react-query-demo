import { Button, Typography, Box } from "@mui/material"
import { useUsers } from "api/useUsers"
import { useHeaderTitle } from "context/header"
import React from "react"
import { ReuseA } from "./ReuseA"

const ReuseQueryComponent = () => {
	useHeaderTitle("Reuse query")
	const { isFetching, refetch } = useUsers()
	const refetchUsers = () => refetch()

	return (
		<>
			<Typography>
				We can even reuse the query in multiple components and have them all update should the data
				change.
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, marginBottom: 2 }}>
				<ReuseA />
				<ReuseA />
				<ReuseA />
				<ReuseA />
			</Box>
			<Button variant="contained" color="primary" onClick={refetchUsers} disabled={isFetching}>
				Refetch
			</Button>
		</>
	)
}

export const ReuseQuery = React.memo(ReuseQueryComponent) as unknown as typeof ReuseQueryComponent
