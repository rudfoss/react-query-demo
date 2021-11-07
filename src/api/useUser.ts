import { QueryFunctionContext, useQuery } from "react-query"
import { delayedFetch } from "utils/delayedFetch"
import { User } from "./jsonPlaceholder"

const fetchUser = async ({
	queryKey
}: QueryFunctionContext<["user", number]>): Promise<User | undefined> => {
	const [, userId] = queryKey
	const response = await delayedFetch()(`https://jsonplaceholder.typicode.com/users/${userId}`)
	// throw new Error("Oopsie")
	return response.json()
}

export const useUser = (userId: number, options?: any) => useQuery(["user", userId], fetchUser)
