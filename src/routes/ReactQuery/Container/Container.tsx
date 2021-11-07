import { Button, ButtonGroup } from "@mui/material"
import React, { useMemo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"

const ReactQueryContainerComponent = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const currentIndex = useMemo(() => {
		const [num] = pathname.split("/").reverse()
		return num ? parseInt(num) : 0
	}, [pathname])

	const gotoNext = () => {
		navigate(`${currentIndex + 1}`)
	}
	const gotoPrevious = () => {
		navigate(`${currentIndex - 1}`)
	}

	return (
		<>
			<Outlet />
			<ButtonGroup sx={{ marginTop: 6 }}>
				<Button disabled={currentIndex <= 1} onClick={gotoPrevious}>
					Previous
				</Button>
				<Button variant="contained" onClick={gotoNext}>
					Next
				</Button>
			</ButtonGroup>
		</>
	)
}

export const ReactQueryContainer = React.memo(
	ReactQueryContainerComponent
) as unknown as typeof ReactQueryContainerComponent
