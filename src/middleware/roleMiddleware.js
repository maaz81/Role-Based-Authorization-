const autherizedRole = (...allowedRoles) =>{
    return (req,res,next) =>{
        if(!allowedRoles.includes(req.user.role)){
            return res.send(403).json({message: "Access denied"})
        }
        next();
    }
}

module.exports = autherizedRole;