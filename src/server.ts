import configENV from '@config/env'
import app from './app'

configENV()
const port = process.env.PORT || 9090
app.listen(port, () => console.log(`Running in port ${port}`))
