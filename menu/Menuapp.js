const Softwares = require("../commands/Softwares");
const Input = require("../Inputs/Input");

class Menuapp{
    static Menu = () => {
        console.log(`
    === Chubb silent installer ===
    === Softwares disponíveis  ===

        `);
        Softwares.SoftwareList();
        console.log("0 - Sair");
        console.log(" ");
        Input.ReadSoftware();
    }
    
}

Menuapp.Menu();


