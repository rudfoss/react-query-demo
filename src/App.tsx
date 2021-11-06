import { BrowserRouter } from "react-router-dom"
import { DevToolsProvider } from "context/devTools"
import { SetupReactQuery } from "context/reactQuery"
import { Layout } from "features/Layout"
import { BaseRoute } from "routes"
import { HeaderProvider } from "context/header"

export const App = () => (
	<DevToolsProvider>
		<BrowserRouter>
			<SetupReactQuery>
				<HeaderProvider>
					<Layout>
						<BaseRoute />
					</Layout>
				</HeaderProvider>
			</SetupReactQuery>
		</BrowserRouter>
	</DevToolsProvider>
)
