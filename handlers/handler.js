// serverless invoke 
module.exports = {
    example: async (event, context) => {
        let response = {}
        
        console.log(event)

        try {
            response.status = 200
            response.message = 'test'
        } catch (ex) {
            response.status = 404
            response.message = 'error'
        }

        console.log(response)
        return await response
    }
}