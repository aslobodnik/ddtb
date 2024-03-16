import { Frog } from 'frog'

import { HomePage } from './web/home'
import passFrame from './frame/ddtb'

export const app = new Frog({})

app.get('/', (c) => c.html(<HomePage />))
app.route('/ddtb', passFrame)

export default app
