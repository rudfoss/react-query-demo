import { Button, Typography } from "@mui/material"
import { useHeaderTitle } from "context/header"
import React from "react"
import { useNavigate } from "react-router"

const HomeComponent = () => {
	useHeaderTitle("React-Query introduction")
	const navigate = useNavigate()

	const goToStart = () => {
		navigate("/react-query")
	}

	return (
		<>
			<Typography>
				This app provides a brief introduction to{" "}
				<a href="https://react-query.tanstack.com" target="_blank" rel="noreferrer">
					React-Query
				</a>
				. A powerfull and friendly library for communicating with asynchronous data sources such as
				REST APIs.
			</Typography>
			<hr />
			<Typography>
				Click{" "}
				<Button onClick={goToStart} color="primary" variant="contained">
					Here
				</Button>{" "}
				to get started.
			</Typography>
		</>
	)
}

export const Home = React.memo(HomeComponent) as unknown as typeof HomeComponent
