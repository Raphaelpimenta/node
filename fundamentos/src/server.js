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




//Formas do Front-end enviar informações

// Query Parameters: URL Stateful => Filtros, paginação, não-obrigatórios
// Route Parameters: Identificação de rescurso
// Request Body: Envio de informações de um formulário 

// http//localhost:3333/users?userId=1&name=Raphael

// GET http//localhost:3333/users/1
// DELETE http//localhost:3333/users/1

// POST http//localhost:3333/users

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