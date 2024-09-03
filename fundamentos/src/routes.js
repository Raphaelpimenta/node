import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { buildRoutePath } from './utils/build-route-path.js'

const database = new Database()


export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'), //url
        handler: (res, req) => {
            const users = database.select('users')

            return res.end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'), //url
        handler: (res, req) => {
            const { name, email } = req.body

            const user = {
                id: randomUUID(),
                name,
                email,
            }

            database.insert('users', user)


            return res.writeHead(201).end("Criação de usuários")
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'), // : (dois pontos) significa que a url receberá um parâmetro dinâmico (qualquer valor). o "id" serve para simbolizar o nome do parametro
        handler: (res, req) => {
            return res.end()
        },
    }

]