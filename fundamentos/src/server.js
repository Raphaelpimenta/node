import http from "node:http"
import { randomUUID } from "node:crypto"
import { json } from "./middlewares/json.js"
import { Database } from "./database.js"

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

const database = new Database()

const server = http.createServer(async (req, res) => {

   const { method, url } = req


   await json(req, res)

   //  console.log(body)

   if(method === "GET" && url === "/users") {

      const users = database.select('users')
      // return res.end("Listagem de usuários")
      return res.end(JSON.stringify(users))
   }

   if(method === "POST" && url === "/users") {

      const { name, email } = req.body

      const user = {
         id: randomUUID(),
         name,
         email,
      }

      database.insert('users', user)


      return res.writeHead(201).end("Criação de usuários")
   }

   return res.writeHead(404).end("Not Found")

})

server.listen(3333)