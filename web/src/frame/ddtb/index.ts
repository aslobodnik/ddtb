import { Frog } from 'frog'

import { startScreen } from './start'
import { statusScreen } from './status'
import { rulesScreen1, rulesScreen2, rulesScreen3, rulesScreen4 } from './rules'
import { transaction } from './transaction'
import { passScreen } from './pass'

export const app = new Frog({
	browserLocation: '/ddtb'
})

app.frame('/', startScreen)
app.frame('/status', statusScreen)
app.frame('/pass', passScreen)
app.frame('/rules-screen-1', rulesScreen1)
app.frame('/rules-screen-2', rulesScreen2)
app.frame('/rules-screen-3', rulesScreen3)
app.frame('/rules-screen-4', rulesScreen4)
app.transaction('/transaction', transaction)

export default app