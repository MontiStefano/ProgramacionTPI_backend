import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

    const header = req.header('Authorization') || "";
    const token = header.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No posee Autorizacion" });

    }

    try {
        const payload = jwt.verify(token, 'progamacion3-2026');
        req.user = payload;
        next();
    } catch (error) {
        return res.status(403).json({ message: `${error}` });
    }

}


export const verifyRole = (requiredRoles) => {
    return (req, res, next) => {
        const header = req.header('Authorization') || "";
        const token = header.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "No posee Autorizacion" });

        }

        try {
            const payload = jwt.verify(token, 'progamacion3-2026');
            if (requiredRoles && !requiredRoles.includes(Number(payload.role))) {
                return res.status(403).json({ message: "No posee permisos suficientes" });
            }
            req.user = payload;
            next();
        } catch (error) {
            return res.status(403).json({ message: `FALLO EN CATCH` });
        }
    }

}