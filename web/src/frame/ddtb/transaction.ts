import { TransactionContext } from 'frog'
import { Address } from 'viem'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../config'
import { getCurrentGameState } from '../utils'

export const transaction = async (c: TransactionContext) => {
  
	const { passedTo } = await getCurrentGameState()
	const { inputText } = c
	try {
		return c.contract({
			to: CONTRACT_ADDRESS,
			abi: CONTRACT_ABI,
			chainId: 'eip155:8453',
			functionName: 'transferFrom',
			args: [passedTo, inputText as Address, 0n],
		})
	} catch (err) {
		console.log(err)
	}
}