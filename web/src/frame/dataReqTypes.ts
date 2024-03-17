import { Address } from "viem"

export interface AirstackEthAddressesData {
	data: Socials
}
interface Socials {
	Socials: {
		Social: UserAddresses[]
	}
}
interface UserAddresses {
	userAssociatedAddresses: Address
}

export interface AirstackEnsData {
	data: {
		Domains: {
			Domain: Domain[]
		}
	}
}
interface Domain {
	name: string
	owner: Address
}

export interface PonderData {
	baseToken: BaseToken
}
interface BaseToken {
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
	tokenId: number
}