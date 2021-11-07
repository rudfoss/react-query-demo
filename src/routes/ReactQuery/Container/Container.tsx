import { Box, Button, ButtonGroup } from "@mui/material"
import React, { useMemo } from "react"
import { Outlet, useLocation, useNavigate } from "react-router"
import { menuItems } from "features/Menu"

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
			<Box>
				<ButtonGroup sx={{ marginBottom: 3 }}>
					<Button disabled={currentIndex <= 1} onClick={gotoPrevious}>
						Previous
					</Button>
					<Button
						disabled={currentIndex >= menuItems.length}
						variant="contained"
						onClick={gotoNext}
					>
						Next
					</Button>
				</ButtonGroup>
			</Box>
			<Outlet />
		</>
	)
}

export const ReactQueryContainer = React.memo(
	ReactQueryContainerComponent
) as unknown as typeof ReactQueryContainerComponent
