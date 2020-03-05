const { History } = require('../models')
const jwt = require('jsonwebtoken')

module.exports = (request, response, next) => {
    try{
        let decoded = jwt.verify(request.headers.token, 'rahasia')
        let history_id = request.params.id
        History.findByPk(history_id)
        .then( result => {
            if(result){
                if(result.user_id == decoded.id){
                    next()
                }else{
                    throw {
                        status_code: 400,
                        type: 'Bad Request',
                        message: 'unauthorized user'
                    }
                }
            }else{
                throw {
                    status_code: 404,
                    type: 'Not Found',
                    message: 'Data Not Found'
                }
            }
        } )
    }catch(err){
        next({
            status_code: 400,
            type: 'Bad Request',
            message: 'unauthorized user'
        })
    }
}