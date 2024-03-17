import { Address } from "viem"
import { AIRSTACK_URL, AIRSTACK_API_KEY, PONDER_URL } from "../config"
import { AirstackEnsData, AirstackEthAddressesData, PonderData } from "./dataReqTypes"

export async function fetchEthAddressesFromFid(fid: number) {
  const query = `
	query MyQuery {
		Socials(
			input: {filter: {dappName: {_eq: farcaster}, identity: {_eq: "fc_fid:${fid}"}}, blockchain: ethereum}
		) {
			Social {
				userAssociatedAddresses
			}
		}
	}
	`
	const res = await fetch(
		AIRSTACK_URL, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
				'Authorization': AIRSTACK_API_KEY,
      },
			body: JSON.stringify({ query: query }),
		}
	)
  const data = (await res.json()) as AirstackEthAddressesData
  const ethAddresses = data.data.Socials.Social
  return ethAddresses
}

export async function fetchEnsNamesFromAddresses(addresses: Address[]) {
	const query = `
	query MyQuery {
		Domains(input: {filter: {owner: {_in: ["${addresses.join('", "')}"]}, isPrimary: {_eq: true}}, blockchain: ethereum}) {
			Domain {
				name
				owner
			}
		}
	}
	`
	const res = await fetch(
		AIRSTACK_URL, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
				'Authorization': AIRSTACK_API_KEY,
      },
			body: JSON.stringify({ query }),
		}
	)
  const data = (await res.json()) as AirstackEnsData
  return data.data.Domains.Domain
}

export async function fetchTransfers(tokenId: number) {
	const query = `
		query MyQuery {
			baseToken(id: "${tokenId}") {
					id
					transfers {
						items {
							from
							to
							timestamp
							tokenId
						}
					}
			}}
	`
	const res = await fetch(
		PONDER_URL, {
			method: 'POST',
			headers: {
        'Content-Type': 'application/json',
      },
			body: JSON.stringify({ query: query }),
		}
	)
	const data = (await res.json()) as { data: PonderData }
	const transfers = data.data.baseToken.transfers.items
	return transfers
}