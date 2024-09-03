// /users/:id
export function buildRoutePath(path) {

    const routeParametersRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParametersRegex, '([a-z0-9\-_]+)')

    console.log(pathWithParams)

    

}