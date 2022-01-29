interface Response {
    status: number
    message: string
}

export const example = async (event: object, context: object) => {
    let response: Response = {
        status: 404,
        message: 'default'
    }

    console.log(event)

    try {
        response.status = 200
        response.message = 'data'
    } catch (ex) {
        response.status = 404
        response.message = 'error'
    }

    console.log(response)
    return await response
}