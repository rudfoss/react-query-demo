import { DevToolsProvider } from "./context/devTools"
import { SetupReactQuery } from "./context/reactQuery"

export const App = () => (
	<DevToolsProvider>
		<SetupReactQuery>
			<div>test</div>
		</SetupReactQuery>
	</DevToolsProvider>
)
