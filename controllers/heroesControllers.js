const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {
    heroes : (req,res)=>{
        res.send(heroes);
    },
   idHeroes : (req,res)=>{
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id})
            
	if(heroe[0] == undefined){
		res.send('Heroe no encontrado')
	}else{
		res.send(`Hola, mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`)
    }
    } 
}
