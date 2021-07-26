import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

const server = new Server();

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());
middleware.linkWith(new CheckPermissionMiddleware());