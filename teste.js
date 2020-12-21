const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

getHost = () => {
    rl.question("Digite o hostname da máquina em que a instalação será realizada (EX: LABRP-ELPT12345): ", function(hostna) {
        console.log(hostna)
        rl.close();
    });
}

getHost();