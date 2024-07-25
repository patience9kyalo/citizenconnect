import express from 'express'
import cron from 'node-cron'
import { run } from './Email Service'

const app = express()

cron.schedule('*/10 * * * * *', async()=>{
    await run()
})


app.listen(4001,()=>{
    console.log("server is running")
})