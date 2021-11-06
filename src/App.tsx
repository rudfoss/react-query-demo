import { BrowserRouter } from "react-router-dom"
import { DevToolsProvider } from "context/devTools"
import { SetupReactQuery } from "context/reactQuery"
import { Layout } from "features/Layout"
import { BaseRoute } from "routes"

export const App = () => (
	<DevToolsProvider>
		<BrowserRouter>
			<SetupReactQuery>
				<Layout>
					<BaseRoute />
				</Layout>
			</SetupReactQuery>
		</BrowserRouter>
	</DevToolsProvider>
)
