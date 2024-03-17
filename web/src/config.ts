import { Address } from "viem";
import { abi } from "./contractAbi";

// define contract constants
export const CONTRACT_ADDRESS = '0x024908AE411d28DeDF86700C69b2F4A172FebCCc' as Address
export const CONTRACT_ABI = abi

// define api constants
export const AIRSTACK_URL = 'https://api.airstack.xyz/graphql'
export const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY
export const PONDER_URL = 'https://hack-ponder-production.up.railway.app/'