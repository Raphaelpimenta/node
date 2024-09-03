import http from "node:http"
import { json } from "./middlewares/json.js"
import { routes } from "./routes.js"


// import { randomUUID } from "node:crypto"
// import { Database } from "./database.js"

// - Criar usuário
// - Listagem de usuários
// - Edição de usuários
// - Remoção de usuários


// - HTTP
//  - Método HTTP`
//  - URL


// GET, POST, PUT, PATCH, DELETE


//GET => Buscar uma informação no back-end
//POST => Criar uma informação no back-end
//PUT => Atualizar uma informação no back-end
//PATCH => Atualizar uma informação específica no back-end
//DELETE => Deletar uma informação no back-end

// const database = new Database()

const server = http.createServer(async (req, res) => {

   const { method, url } = req

   await json(req, res)

   const route = routes.find(route => {
      return route.method === method && route.path === url
   })

   if(route) {
      return route.handler(res, req)
   }


   return res.writeHead(404).end("Not Found")

})

server.listen(3333)