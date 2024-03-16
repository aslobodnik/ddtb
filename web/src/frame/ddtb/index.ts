import { Frog } from 'frog'

import { statusScreen } from './status'
import { missingScreen } from './missing'
import { rulesScreen1, rulesScreen2, rulesScreen3, rulesScreen4 } from './rules'
import { transaction } from './transaction'
import { passScreen } from './pass'

export const app = new Frog({
	browserLocation: '/ddtb'
})

app.frame('/', statusScreen) // status or missing; depending on if there is an active game
app.frame('/pass', passScreen)
app.frame('/rules-screen-1', rulesScreen1)
app.frame('/rules-screen-2', rulesScreen2)
app.frame('/rules-screen-3', rulesScreen3)
app.frame('/rules-screen-4', rulesScreen4)
app.transaction('/tx', transaction)

export default app