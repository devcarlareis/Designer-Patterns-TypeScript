import * as readline from 'readline';
import CheckPermissionMiddleware from "./middlewares/CheckPermissionMiddleware";
import CheckUserMiddleware from "./middlewares/CheckUserMiddleware";
import Server from "./servers/Server";

declare var process;

const server = new Server();

function setPromptQuestions() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    rl.question('Digite o seu email', email => {
        rl.question('Digite a sua senha', password => {
            server.logIn(email, password);
            rl.close();
        })
    })

    rl.on('close', setPromptQuestions);
        
}

const middleware = new CheckUserMiddleware();

middleware.linkWith(new CheckPermissionMiddleware());

server.setMiddleware(middleware);

setPromptQuestions();