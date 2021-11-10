import { Typography, Box } from "@mui/material"
import { useHeaderTitle } from "context/header"
import React from "react"
import { ReuseA } from "./ReuseA"
import { ReuseB } from "./ReuseB"

const ReuseQueryComponent = () => {
	useHeaderTitle("Reuse query")
	return (
		<>
			<Typography>
				Isolating our query in a custom hook enables us to reuse it in multiple components
			</Typography>
			<Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, marginBottom: 2 }}>
				<ReuseA />
				<ReuseB />
			</Box>
		</>
	)
}

export const ReuseQuery = React.memo(ReuseQueryComponent) as unknown as typeof ReuseQueryComponent
