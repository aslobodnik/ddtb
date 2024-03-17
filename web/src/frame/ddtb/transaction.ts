import { TransactionContext } from 'frog'
import { Address } from 'viem'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../../config'
import { getCurrentGameState } from '../utils'
import { EnsDomain, fetchAddressFromEnsName } from '../hub'

export const transaction = async (c: TransactionContext) => {
  
	const { passedTo } = await getCurrentGameState()
	const { inputText } = c

	let userAddressReturn: EnsDomain[]
	let userAddress: Address | undefined = undefined

	try {
		if (inputText?.slice(-4) === '.eth') {
			userAddressReturn = await fetchAddressFromEnsName(inputText ?? '')
			userAddress = userAddressReturn[0].owner
		}
	} catch (err) {
		console.log(err)
	}


  return c.contract({
    to: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: 'eip155:8453',
    functionName: 'transferFrom',
    args: [passedTo, userAddress ?? inputText as Address, 0n],
  })


	return c.contract({
		to: CONTRACT_ADDRESS,
		abi: CONTRACT_ABI,
		chainId: 'eip155:8453',
		functionName: 'transferFrom',
		args: [passedTo, userAddress ?? inputText as Address, 0n],
	})
}