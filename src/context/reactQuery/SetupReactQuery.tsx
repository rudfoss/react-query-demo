import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { useDevTools } from "context/devTools"

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
			refetchOnWindowFocus: false,
			useErrorBoundary: true
		}
	}
})

export interface SetupReactQueryProps {
	children: React.ReactChild
}

const SetupReactQueryComponent = ({ children }: SetupReactQueryProps) => {
	const { isDevToolsEnabled } = useDevTools()
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{isDevToolsEnabled && <ReactQueryDevtools />}
		</QueryClientProvider>
	)
}

export const SetupReactQuery = React.memo(
	SetupReactQueryComponent
) as unknown as typeof SetupReactQueryComponent
