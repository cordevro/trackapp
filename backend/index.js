//llamado a la variable app que está en la carpeta bin dentro del archivo routes
const {app} = require("./bin/routes");

//puerto a utilizar
app.listen(3000, ()=>{
    console.log("servidor on");
})