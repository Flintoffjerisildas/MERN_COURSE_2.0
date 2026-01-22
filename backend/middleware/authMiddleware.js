const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token || !token.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try{
        const tokenValue = token.split(" ")[1];
        jwt.verify(tokenValue, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            req.user = user;
            next();
        });
    }catch(error){
        res.status(500).json({ message: "Server error, unable to authenticate" });
    }
};

module.exports = authMiddleware;