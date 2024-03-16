import { FrameContext, Frog, TransactionContext } from 'frog'

import { startScreen } from './start'
import { rulesScreen1, rulesScreen2, rulesScreen3, rulesScreen4 } from './rules'
import { statusScreen } from './status'

type FrogOptions = {
  // Bindings: { ZEROX_API_KEY?: string }
}

export type CustomFrameContext = FrameContext<FrogOptions>
export type CustomTransactionContext = TransactionContext<FrogOptions>

export const app = new Frog<FrogOptions>({
	browserLocation: '/pass'
})

app.frame('/', startScreen)
app.frame('/rules-screen-1', rulesScreen1)
app.frame('/rules-screen-2', rulesScreen2)
app.frame('/rules-screen-3', rulesScreen3)
app.frame('/rules-screen-4', rulesScreen4)
app.frame('/status', statusScreen)

export default app