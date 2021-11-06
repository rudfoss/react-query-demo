import { BrowserRouter } from "react-router-dom"
import { DevToolsProvider } from "./context/devTools"
import { SetupReactQuery } from "./context/reactQuery"
import { BaseRoute } from "./routes"

export const App = () => (
	<DevToolsProvider>
		<BrowserRouter>
			<SetupReactQuery>
				<BaseRoute />
			</SetupReactQuery>
		</BrowserRouter>
	</DevToolsProvider>
)
