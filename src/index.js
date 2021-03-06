import './index.html'
import dva from 'dva'

// 1. Initialize
const app = dva()

// 2. Model

app.model(require('./models/app'))
app.model(require('./models/dashboard'))
app.model(require('./models/assets'))
app.model(require('./models/assets_type'))
app.model(require('./models/device'))
app.model(require('./models/regions'))
app.model(require('./models/zone'))
app.model(require('./models/branch'))
app.model(require('./models/users'))
app.model(require('./models/user_type'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
