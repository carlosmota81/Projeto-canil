import express, {Request, Response} from 'express'
import path from 'path'
import mustache from 'mustache-express'
import mainRoutes from './routes/index'
import dontenv from 'dotenv'

dontenv.config();



const server = express()

server.set('view engine', 'mustache')
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

server.use(express.urlencoded({extended:true}))

server.use(express.static(path.join(__dirname,'../public')))
server.use(mainRoutes)



server.use((req:Request, res:Response)=>{
    res.status(404).send('Pagina não encontrada')
})

server.listen(process.env.PORT)