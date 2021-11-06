import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useHeaderTitle } from "context/header"
import React from "react"

const NotFoundComponent = () => {
	useHeaderTitle("400+4 Not found")
	return (
		<Box>
			<Typography>Oops... did you mistype?</Typography>
		</Box>
	)
}

export const NotFound = React.memo(NotFoundComponent) as unknown as typeof NotFoundComponent
