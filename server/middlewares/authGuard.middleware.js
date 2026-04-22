import jwt from "jsonwebtoken";

const authGuard = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization)
      return res.status(401).json({ message: "No token provided!" });
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.id = decoded.id;
    next();
  } catch (error) {
    next("Authorization Failed!!!");
  }
};
export { authGuard };
