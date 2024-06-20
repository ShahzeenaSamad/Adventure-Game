#! /usr/bin/env node
//SHABANG

import inquirer from "inquirer"
import chalk from "chalk";

console.log(chalk.bold.underline.green("=".repeat(70)))
console.log(chalk.bold.underline.italic.bgYellowBright.black("\t\t***** ADVENTURE GAME *****"))
console.log(chalk.bold.underline.green("=".repeat(70)))

//--------Classes player and opponent
class Player {
    name : string;
    fuel : number =100;

    constructor(name : string){
        this.name = name;
    }
    fuelDecrease (){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease (){
        this.fuel = 100
    }
}

class Opponent {
    name : string;
    fuel : number =100;

    constructor (name:string){
        this.name = name;
    }
}

//-----------Player name and select opponent
let player = await inquirer.prompt ({
    name : "name",
    type : "input",
    message : chalk.green("\nPlease Enter Your Name : \n")
})

let opponent = await inquirer.prompt ({
    name : "select",
    type : "list",
    message : chalk.blueBright("Select Your Opponent\n"),
    choices : ["Skeleton","Assassin","Zombie"]
})

//------------Gather Data
let p1 = new Player (player.name)
let o1 = new Opponent (opponent.select)

do{
    //--------SKELETON
    if (opponent.select == "Skeleton"){

    let ask = await inquirer.prompt ({
    name : "opt",
    type : "list",
    message : chalk.magentaBright("\nSelect Your Opponent\n"),
    choices : ["Attack","Drink Portion","Run for your life..."]
    });

    if(ask.opt == "Attack"){
        let num = Math.floor (Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}`))
            console.log(chalk.bold.green(`\n${o1.name} fuel is ${o1.fuel}`))

            if (p1.fuel <=0){
                console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time\n"))
                process.exit()
            }

        }
        if(num <= 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}`))
            console.log(chalk.bold.green(`\n${p1.name} fuel is ${p1.fuel}`))

            if (o1.fuel <=0){
                console.log(chalk.bold.italic.green("You Win"))
                process.exit()
            }

        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`\nYou Drink Health Portion your fuel is ${p1.fuel}\n`))
    }
    if(ask.opt == "\nRun for your life..."){
        console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time\n"))
        process.exit()
    }
}
    //--------ASSASIN
if (opponent.select == "Assassin"){

    let ask = await inquirer.prompt ({
    name : "opt",
    type : "list",
    message : chalk.magentaBright("\nSelect Your Opponent\n"),
    choices : ["Attack","Drink Portion","Run for your life..."]
    });

    if(ask.opt == "Attack"){
        let num = Math.floor (Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}\n`))
            console.log(chalk.bold.green(`\n${o1.name} fuel is ${o1.fuel}\n`))

            if (p1.fuel <=0){
                console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time\n"))
                process.exit()
            }

        }
        if(num <= 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}\n`))
            console.log(chalk.bold.green(`\n${p1.name} fuel is ${p1.fuel}\n`))

            if (o1.fuel <=0){
                console.log(chalk.bold.italic.green("You Win"))
                process.exit()
            }

        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`\nYou Drink Health Portion your fuel is ${p1.fuel}`))
    }
    if(ask.opt == "Run for your life..."){
        console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time"))
        process.exit()
    }
}

   //---------ZOMBIE
   if (opponent.select == "Zombie"){

    let ask = await inquirer.prompt ({
    name : "opt",
    type : "list",
    message :chalk.magentaBright ("\nSelect Your Opponent"),
    choices : ["Attack","Drink Portion","Run for your life..."]
    });

    if(ask.opt == "Attack"){
        let num = Math.floor (Math.random() * 2)
        if(num > 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${p1.name} fuel is ${p1.fuel}\n`))
            console.log(chalk.bold.green(`\n${o1.name} fuel is ${o1.fuel}\n`))

            if (p1.fuel <=0){
                console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time\n"))
                process.exit()
            }

        }
        if(num <= 0){
            p1.fuelDecrease()
            console.log(chalk.bold.red(`\n${o1.name} fuel is ${o1.fuel}\n`))
            console.log(chalk.bold.green(`\n${p1.name} fuel is ${p1.fuel}\n`))

            if (o1.fuel <=0){
                console.log(chalk.bold.italic.green("You Win"))
                process.exit()
            }

        }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`\nYou Drink Health Portion your fuel is ${p1.fuel}`))
    }
    if(ask.opt == "Run for your life..."){
        console.log(chalk.bold.italic.red("\nYou Loose, Better luck Next Time"))
        process.exit()
    }
}
} while(true)














