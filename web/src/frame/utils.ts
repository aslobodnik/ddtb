import { Address } from "viem"
import { fetchTransfers } from "./hub"

export async function getCurrentGameState() {
	const transfers = await fetchTransfers()
	const lastTransfer = transfers[transfers.length - 1]
	
	const formattedTransfer = { 
		passedFrom: lastTransfer.from,
		passedTo: lastTransfer.to,
		timeRemaining: lastTransfer.timestamp,
	} as FormattedTransfer
	
	return formattedTransfer
}

interface FormattedTransfer {
	passedFrom: Address
	passedTo: Address
	timeRemaining: number
}

function checkIsGameActive(timeRemaining: Date) {
	// ...

	return true
}