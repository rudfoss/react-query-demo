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
				. A powerful and friendly library for communicating with asynchronous data sources such as
				REST APIs.
			</Typography>
			<Typography>
				Want more?{" "}
				<a href="https://tkdodo.eu/blog/practical-react-query" target="_blank" rel="noreferrer">
					Here is a comprehensive guide to using React Query with Typescript
				</a>
				.
			</Typography>
			<hr />
			<Button onClick={goToStart} color="primary" variant="contained">
				Let's begin
			</Button>{" "}
		</>
	)
}

export const Home = React.memo(HomeComponent) as unknown as typeof HomeComponent
