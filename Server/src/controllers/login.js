const users =require('../utils/users')


const login = (req,res) => {
    const {email, password} = req.query;

    if(email && password) {
       const userFound = users.find((user) => user.email === email && user.password === password);

       return userFound 
       ? res.status(200).json({access: true})
       : res.status(404).json({access: false})
    }
    return req.status(500).send('Debe ingresar un email y una password')
 }

 
 module.exports= {
    login
};