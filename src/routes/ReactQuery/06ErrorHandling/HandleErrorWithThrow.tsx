import { Alert, CircularProgress, Typography } from "@mui/material"
import { User } from "api/jsonPlaceholder"
import React from "react"
import { useQuery } from "react-query"
import { delayedFetch } from "utils/delayedFetch"

const fetchUsers = async (shouldFail: boolean): Promise<User[]> => {
	const response = await delayedFetch(1000)("https://jsonplaceholder.typicode.com/users")
	if (shouldFail) throw new Error("Oopsie")
	return response.json()
}

export interface HandleErrorWithThrowProps {
	queryEnabled: boolean
	shouldFail: boolean
}

const HandleErrorWithThrowComponent = ({ queryEnabled, shouldFail }: HandleErrorWithThrowProps) => {
	const { isIdle, isFetching, isSuccess } = useQuery(
		["usersThrowFail"],
		() => fetchUsers(shouldFail),
		{
			enabled: queryEnabled,
			useErrorBoundary: true
		}
	)

	return (
		<>
			{isIdle && <Typography>Throw: Not fetched yet</Typography>}
			{isFetching && <CircularProgress />}
			{isSuccess && <Alert severity="success">Query fetched</Alert>}
		</>
	)
}

export const HandleErrorWithThrow = React.memo(
	HandleErrorWithThrowComponent
) as unknown as typeof HandleErrorWithThrowComponent
