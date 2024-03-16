import { Address, parseAbi } from "viem";

export const CONTRACT_ADDRESS = '' as Address

export const CONTRACT_ABI = parseAbi(['function transferFrom(address from, address to, uint256 tokenId)'])
