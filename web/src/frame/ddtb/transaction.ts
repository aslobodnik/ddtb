import { TransactionContext } from 'frog'
import { Address, parseAbi, parseEther } from 'viem'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../config'

export const transaction = async (c: TransactionContext) => {
  return c.contract({
    to: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: 'eip155:8453',
    functionName: 'transferFrom',
    args: ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000', 0n],
  })
}