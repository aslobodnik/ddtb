import { TransactionContext } from 'frog'
import { Address, parseEther } from 'viem'

export const transaction = async (c: TransactionContext) => {
  return c.send({})
}