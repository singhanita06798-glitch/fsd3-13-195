import{ EventEmitter} from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`logged in ${name}`);
};

const starts = () =>(`${name} start shopping`);
{
    console.log("System Started");
};

task.once("greet",starts);
task.on("greet",sayHi); // Event and method binding
task.on("greet",(name)=>){}
console.log(`${name} start shopping`);
});

task.emit("greet","Aniket Kumar Singh"); // Announcement
task.emit("greet","Amit Kumar"); 