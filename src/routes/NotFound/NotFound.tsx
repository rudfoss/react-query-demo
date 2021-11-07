import { Typography, Alert, AlertTitle } from "@mui/material"
import { useHeaderTitle } from "context/header"
import React from "react"
import { Link } from "react-router-dom"

const NotFoundComponent = () => {
	useHeaderTitle("Not found")
	return (
		<Alert severity="error">
			<AlertTitle>404 - Not found</AlertTitle>
			<Typography>
				Oops... it appears this page does not exist?{" "}
				<Link to="/">Try going back home and starting again.</Link>
			</Typography>
		</Alert>
	)
}

export const NotFound = React.memo(NotFoundComponent) as unknown as typeof NotFoundComponent
