const jwt = require('jsonwebtoken');

const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token. Authorization denied." });
    }
    try{

        const decoded = jwt.verify(token,process.env.JWT_KEY);
        req.user = decoded;
        next();
        console.log(token);
    }catch(error){
        return res.status(401).json({ message: "Invalid token." });
    }
}

module.exports = authMiddleware;