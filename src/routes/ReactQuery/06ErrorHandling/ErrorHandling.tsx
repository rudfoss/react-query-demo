import { Typography } from "@mui/material"
import { useHeaderTitle } from "context/header"
import React from "react"

const ErrorHandlingComponent = () => {
	useHeaderTitle("Error handling")
	return (
		<>
			<Typography>
				React-Query supports two different ways to handle errors. You can inspect the state and
				based on that render something, or you can throw and use React error boundaries to catch
				them.
			</Typography>
		</>
	)
}

export const ErrorHandling = React.memo(
	ErrorHandlingComponent
) as unknown as typeof ErrorHandlingComponent
