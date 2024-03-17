import { Address } from "viem";
import { abi } from "./contractAbi";

// define contract constants
export const CONTRACT_ADDRESS = '0xEC2244b547BD782FC7DeefC6d45E0B3a3cbD488d' as Address
export const CONTRACT_ABI = abi

// define api constants
export const AIRSTACK_URL = 'https://api.airstack.xyz/graphql'
// export const AIRSTACK_API_KEY = process.env.AIRSTACK_API_KEY
export const PONDER_URL = 'https://hack-ponder-production.up.railway.app/'