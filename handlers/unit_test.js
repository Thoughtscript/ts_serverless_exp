const E = {
    dt: new Date().toISOString(),
    data: 1010101
}

const F = async (event, context) => {
    console.log(event)

    let response = {}

    try {
        response.body = event.data
        response.statusCode = 200
    } catch (ex) {
        response.body = 'Error'
        response.statusCode = 404
    }

    console.log(response)
    return await response
}

F(E).then(success => console.log("Test complete!"))

module.exports = {
    F
}