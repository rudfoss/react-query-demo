/**
 * Create a fetch that is delayed by a specified amount of time.
 * @param delayMS
 * @returns
 */
export const delayedFetch =
	(delayMS = 3000) =>
	async (url: string, init?: RequestInit) => {
		await new Promise((resolve) => setTimeout(resolve, delayMS))
		return fetch(url, init)
	}
