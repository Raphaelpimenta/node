import http from "node:http"

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

const users = []


const server = http.createServer((req, res) => {

   const { method, url } = req

   if(method === "GET" && url === "/users") {
      // return res.end("Listagem de usuários")
      return res.setHeader("Content-type", "application/json").end(JSON.stringify(users))
   }

   if(method === "POST" && url === "/users") {

      users.push({
         id: 1,
         nome: "John Wick",
         email: "johnwick@tesst.com"
      })
      return res.writeHead(201).end("Criação de usuários")
   }

   return res.writeHead(404).end("Not Found")

})

server.listen(3333)