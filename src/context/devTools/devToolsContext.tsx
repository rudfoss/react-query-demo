import React, { createContext, useCallback, useContext } from "react"
import { useBrowserStore } from "../../utils/useBrowserStore"
import { useShortcut } from "../../utils/useShortcut"

interface DevToolsContextProps {
	isDevToolsEnabled: boolean
	setDevToolsEnabled: (enabled?: boolean) => void
}

const DevToolsContext = createContext<DevToolsContextProps>(undefined as any)
DevToolsContext.displayName = "DevTools"

export const useDevTools = () => {
	const ctx = useContext(DevToolsContext)
	if (!ctx) throw new Error("useDevTools must be provided before use")
	return ctx
}

export interface DevToolsProviderProps {
	children: React.ReactChild
}

const DevToolsProviderComponent = ({ children }: DevToolsProviderProps) => {
	const [isDevToolsEnabled, setIsDevToolsEnabled] = useBrowserStore("devTools", false)
	const setDevToolsEnabled = useCallback(
		(enabled?: boolean) => setIsDevToolsEnabled(enabled ?? !isDevToolsEnabled),
		[setIsDevToolsEnabled, isDevToolsEnabled]
	)

	useShortcut(
		"Ctrl+Alt+D",
		useCallback(() => setDevToolsEnabled(), [setDevToolsEnabled])
	)

	const value: DevToolsContextProps = { isDevToolsEnabled, setDevToolsEnabled }
	return <DevToolsContext.Provider value={value}>{children}</DevToolsContext.Provider>
}

export const DevToolsProvider = React.memo(
	DevToolsProviderComponent
) as unknown as typeof DevToolsProviderComponent
