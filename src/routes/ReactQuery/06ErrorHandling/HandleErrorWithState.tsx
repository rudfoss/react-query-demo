import { Alert, CircularProgress, Typography } from "@mui/material"
import { User } from "api/jsonPlaceholder"
import React, { useEffect } from "react"
import { useQuery } from "react-query"
import { delayedFetch } from "utils/delayedFetch"

const fetchUsers = async (shouldFail: boolean): Promise<User[]> => {
	const response = await delayedFetch(1000)("https://jsonplaceholder.typicode.com/users")
	if (shouldFail) throw new Error("Oopsie")
	return response.json()
}

export interface HandleErrorWithStateProps {
	queryEnabled: boolean
	shouldFail: boolean
}

const HandleErrorWithStateComponent = ({ queryEnabled, shouldFail }: HandleErrorWithStateProps) => {
	const { isError, isFetching, error, isSuccess, isIdle } = useQuery(
		["usersStateFail"],
		() => fetchUsers(shouldFail),
		{
			enabled: queryEnabled,
			useErrorBoundary: false
		}
	)

	useEffect(() => {
		if (isError) {
			console.error("Failed to fetch query", error)
		}
	}, [isError, error])

	return (
		<>
			{isIdle && <Typography>State: Not fetched yet</Typography>}
			{isFetching && <CircularProgress />}
			{isError && <Alert severity="error">Query failed</Alert>}
			{isSuccess && <Alert severity="success">Query fetched</Alert>}
		</>
	)
}

export const HandleErrorWithState = React.memo(
	HandleErrorWithStateComponent
) as unknown as typeof HandleErrorWithStateComponent
