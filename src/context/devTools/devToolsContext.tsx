import React, { createContext, useContext } from "react"
import { useBrowserStore } from "../../utils/useBrowserStore"

interface DevToolsContextProps {
	isDevToolsEnabled: boolean
	setDevToolsEnabled: (enabled?: boolean) => void
}

const DevToolsContext = createContext<DevToolsContextProps>(undefined as any)
DevToolsContext.displayName = "DevTools"

export const useDevTools = () => {
	const ctx = useContext(DevToolsContext)
	if (!ctx) throw new Error("useDevTools requires DevTools")
	return ctx
}

export interface DevToolsProviderProps {
	children: React.ReactChild
}

const DevToolsProviderComponent = ({ children }: DevToolsProviderProps) => {
	const [isDevToolsEnabled, setIsDevToolsEnabled] = useBrowserStore("devTools", false)
	const setDevToolsEnabled = (enabled?: boolean) =>
		setIsDevToolsEnabled(enabled ?? !isDevToolsEnabled)

	const value: DevToolsContextProps = { isDevToolsEnabled, setDevToolsEnabled }
	return <DevToolsContext.Provider value={value}>{children}</DevToolsContext.Provider>
}

export const DevToolsProvider = React.memo(
	DevToolsProviderComponent
) as unknown as typeof DevToolsProviderComponent
