import { FrameContext, Frog, TransactionContext } from 'frog'

import { statusScreen } from './status'
import { missingScreen } from './missing'
import { rulesScreen1, rulesScreen2, rulesScreen3, rulesScreen4 } from './rules'

type FrogOptions = {
  // Bindings: { ZEROX_API_KEY?: string }
}

export type CustomFrameContext = FrameContext<FrogOptions>
export type CustomTransactionContext = TransactionContext<FrogOptions>

export const app = new Frog<FrogOptions>({
	browserLocation: '/ddtb'
})

app.frame('/', statusScreen) // status or missing; depending on if there is an active game
app.frame('/rules-screen-1', rulesScreen1)
app.frame('/rules-screen-2', rulesScreen2)
app.frame('/rules-screen-3', rulesScreen3)
app.frame('/rules-screen-4', rulesScreen4)

export default app