const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb+srv://pratiksamrat14:123@bookshelf.bddzkgr.mongodb.net/?retryWrites=true&w=majority'
    }
}

exports.get = function get(env){
    return config[env] || config.default
} 