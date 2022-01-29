const AWS = require('aws-sdk')

// May need to include aws_config.json or programmatic config.
/*
AWS.config.update({
    accessKeyId: 'afew', 
    secretAccessKey: 'af/afw'
})
*/

// serverless invoke 
module.exports = {
    example: (event, context) => {
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
        return response
    }
}