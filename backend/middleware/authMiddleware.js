import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next)=>{
    const token = req.headers['authorization'];
    
    if(!token){
        return res.status(401).json({message: 'No token provided!'});
    }

      // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Failed to authenticate token' });
            }

            // If verified, save decoded info to request for use in other routes
            req.userId = decoded.userId;
            next();
        });
    };

export default authMiddleware;
