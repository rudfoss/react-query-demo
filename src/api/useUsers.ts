import { useQuery } from "react-query"
import { delayedFetch } from "utils/delayedFetch"
import { User } from "./jsonPlaceholder"

const fetchUsers = async (): Promise<User[]> => {
	const response = await delayedFetch()("https://jsonplaceholder.typicode.com/users")
	// throw new Error("Oopsie")
	return response.json()
}

export const useUsers = () => useQuery(["users"], fetchUsers)
