import { Address } from "viem"
import { fetchTransfers } from "./hub"

export async function getCurrentGameState() {
	const transfers = await fetchTransfers(0) // hardcode tokenId 0
	const lastTransfer = transfers[0]
	const currentGameState = { 
		passedFrom: lastTransfer.from,
		passedTo: lastTransfer.to,
		timestamp: lastTransfer.timestamp,
		tokenId: lastTransfer.tokenId,
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