import { resolve } from 'path'
import { config } from 'dotenv'

const configEnv = () => {
  const environment = process.env.NODE_ENV.toUpperCase().trim()
  const fileEnv = environment === 'TEST' ? '.tests.env' : '.env'
  console.info(`Loading : ${fileEnv}`)
  config({
    path: resolve(__dirname, `../../${fileEnv}`)
  })
}

export default configEnv
