import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material"
import { useHeaderTitle } from "context/header"
import { ErrorBoundaryBase } from "features/ErrorBoundary"
import React, { useState } from "react"
import { HandleErrorWithState } from "./HandleErrorWithState"
import { HandleErrorWithThrow } from "./HandleErrorWithThrow"

const ErrorHandlingComponent = () => {
	useHeaderTitle("Error handling")
	const [shouldFail, setShouldFail] = useState(true)
	const [queryEnabled, setQueryEnabled] = useState(false)

	const onShouldFailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setShouldFail(evt.target.checked)
	}

	const toggleQuery = () => setQueryEnabled(!queryEnabled)

	return (
		<>
			<Typography>
				React-Query supports two different ways to handle errors. You can inspect the state and
				based on that render something, or you can throw and use React error boundaries to catch
				them.
			</Typography>
			<Box>
				<FormControlLabel
					control={<Checkbox checked={shouldFail} onChange={onShouldFailChange} />}
					label="Should fetch fail"
				/>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 2, marginBottom: 2 }}>
				<Box sx={{ flexGrow: 1, margin: 2 }}>
					<HandleErrorWithState shouldFail={shouldFail} queryEnabled={queryEnabled} />
				</Box>
				<Box sx={{ flexGrow: 1, margin: 2 }}>
					<ErrorBoundaryBase>
						<HandleErrorWithThrow shouldFail={shouldFail} queryEnabled={queryEnabled} />
					</ErrorBoundaryBase>
				</Box>
			</Box>
			<Button onClick={toggleQuery}>{queryEnabled ? "Disable" : "Enable"} query</Button>
		</>
	)
}

export const ErrorHandling = React.memo(
	ErrorHandlingComponent
) as unknown as typeof ErrorHandlingComponent
