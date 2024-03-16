import { Frog } from 'frog'

import { HomePage } from './web/home'
import passFrame from './frame/pass'

export const app = new Frog({})

app.get('/', (c) => c.html(<HomePage />))
app.route('/pass', passFrame)

export default app
