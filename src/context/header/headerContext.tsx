import React, { createContext, useContext, useEffect, useState } from "react"

interface HeaderContextProps {
	title: [string, React.Dispatch<React.SetStateAction<string>>]
	menuOpen: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
	openMenu: () => unknown
}

const HeaderContext = createContext<HeaderContextProps>(undefined as any)
HeaderContext.displayName = "Header"

export const useHeader = () => {
	const ctx = useContext(HeaderContext)
	if (!ctx) throw new Error("useHeader must be provided before use")
	return ctx
}
export const useHeaderTitle = (newTitle: string) => {
	const { title } = useHeader()
	useEffect(() => {
		title[1](newTitle)
	}, [])
}

export interface nameProps {
	children: React.ReactChild
}

const HeaderProviderComponent = ({ children }: nameProps) => {
	const title = useState("")
	const menuOpen = useState(false)
	const openMenu = () => menuOpen[1](true)
	const value: HeaderContextProps = { title, menuOpen, openMenu }

	return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
}

export const HeaderProvider = React.memo(
	HeaderProviderComponent
) as unknown as typeof HeaderProviderComponent
