import { Address } from "viem"

export interface BaseToken {
	id: number
	transfers: Transfer
}

interface Transfer {
	items: TransferItem[]
}

interface TransferItem {
	from: Address
	to: Address
	timestamp: number
}