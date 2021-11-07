import { Button, Paper, Typography } from "@mui/material"
import { DevToolsConsumer } from "context/devTools"
import React, { ErrorInfo } from "react"

export interface ErrorBoundaryBaseProps {
	title?: string
	message?: string
	/**
	 * A custom function to call when an error is caught. Use to display a custom error message.
	 */
	onError?: (error: Error) => React.ReactNode
	children: React.ReactChild
}
interface ErrorBoundaryBaseState {
	error?: Error
	errorInfo?: ErrorInfo
}

/**
 * A base class for creating custom error handlers
 */
export class ErrorBoundaryBase extends React.PureComponent<
	ErrorBoundaryBaseProps,
	ErrorBoundaryBaseState
> {
	public state: ErrorBoundaryBaseState = {}

	public constructor(props: ErrorBoundaryBaseProps) {
		super(props)
	}

	public static getDerivedStateFromError(error: Error): ErrorBoundaryBaseState {
		return { error }
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(error)
		console.error(errorInfo)
		this.setState({ errorInfo })
	}
	private reset() {
		this.setState({})
	}

	private _renderError() {
		const { error, errorInfo } = this.state
		return (
			<div style={{ display: "flex", justifyContent: "center", padding: "12px" }}>
				<Paper style={{ maxWidth: "600px", padding: "18px" }}>
					<Typography variant="h1" color="error">
						{this.props.title ?? "Error"}
					</Typography>
					<DevToolsConsumer>
						{({ isDevToolsEnabled }) =>
							isDevToolsEnabled ? (
								<>
									<hr />
									<Typography variant="h3">{this.props.message ?? error?.message}</Typography>
									<hr />
									<div>
										<Typography variant="h4">Stack</Typography>
										<pre style={{ overflow: "auto" }}>
											<code>{error?.stack}</code>
										</pre>
									</div>
									<div>
										<Typography variant="h4">Component stack</Typography>
										<pre style={{ overflow: "auto" }}>
											<code>{errorInfo?.componentStack}</code>
										</pre>
									</div>
								</>
							) : (
								<Typography>
									A component thrown an error. The console contains more information. Please notify
									the development team.
								</Typography>
							)
						}
					</DevToolsConsumer>
				</Paper>
			</div>
		)
	}

	public render() {
		if (this.state.error) {
			return this.props.onError?.(this.state.error) ?? this._renderError()
		}
		return this.props.children
	}
}
