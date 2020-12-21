const Input = require("./Input");

var softwareList = [
    {
        name: "Adobe Pro 11",
        location: "",
        command: ""
    },
    {
        name: "Google Earth Pro",
        location: "",
        command: "",
    },
    {
        name: "Global Protect",
        location: "",
        command: "",
    },
    {
        name: "Google Chrome",
        location: "",
        command: "",
    },
    {
        name: "PowerBI",
        location: "",
        command: "",
    },
    {
        name: "Project 2010 Pro",
        location: "",
        command: "",
    },
    {
        name: "Qlik View",
        location: "",
        command: "",
    },
    {
        name: "Visio 2010 Pro",
        location: "",
        command: "",
    },
    {
        name: "Webex",
        location: "",
        command: "",
    },
    {
        name: "Winrat",
        location: "",
        command: "",
    },
];

class Softwares{
    
    static SoftwareList = () => {
        var accountant = 1;
        softwareList.forEach(element => {    
            console.log(`${accountant} - ${element.name}`)
            accountant++;
        })

    }

    static RefSoftware = (index) => {
        if(isNaN(index)){
            console.log("erro");
        }else{
            if(index <= softwareList.length){
                index--;
                var thisSoftware = softwareList[index];
                if(thisSoftware != undefined){
                    console.log(`Software selecionado: ${thisSoftware.name}`);
                    return thisSoftware
                }
            }else{
                console.log("Digite um número que esteja presente na lista \n");
                Input.ReadSoftware();
            }
        }
        }
}

module.exports = Softwares;