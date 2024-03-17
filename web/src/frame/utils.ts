import { Address } from "viem"
import { fetchTransfers } from "./hub"

export async function getCurrentGameState() {
	const transfers = await fetchTransfers(0) // hardcode tokenId 0
	console.log(transfers)
	const maxTimestamp = transfers.reduce((a, b) => Math.max(a, b.timestamp), -Infinity)
	console.log(maxTimestamp)
	const lastTransfer = transfers.find((transfer) => transfer.timestamp.toString() === maxTimestamp.toString())
	console.log(lastTransfer)
	const currentGameState = {
		passedFrom: (!lastTransfer) ? lastTransfer!.from : transfers[0].from,
		passedTo: (!lastTransfer) ? lastTransfer!.to : transfers[0].to,
		timestamp: (!lastTransfer) ? lastTransfer!.timestamp : transfers[0].timestamp,
		tokenId: (!lastTransfer) ? lastTransfer!.tokenId : transfers[0].tokenId,
	} as GameState
	return currentGameState
}
interface GameState {
	passedFrom: Address
	passedTo: Address
	timestamp: number
	tokenId: number
}

export function getTimestampInSeconds () {
  return Math.floor(Date.now() / 1000)
}

export function checkIfGameIsActive(secondsRemaining: number, expiresAfterNumHours: number = 12) {
	const hours = secondsRemaining / 60 / 60
	return (hours < expiresAfterNumHours)
}

export function formatTimeRemaining(seconds: number) {
	const date = new Date(0)
	date.setSeconds(seconds)
	const timeString = date.toISOString().substring(11, 19)
	return timeString
}