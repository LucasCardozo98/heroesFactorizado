const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
const mainRoute = require('./routes/main')
const heroeRoute = require('./routes/heroes')

app.use('/',mainRoute)

app.use('/heroes', heroeRoute)

/* app.use('/heroes/detalle/:id', heroeRoute) */

app.use('/heroes/bio/:id/:ok?', (req, res) => {
	let heroe = heroes.filter(heroe => {
		return heroe.id == req.params.id
	});
	if(heroe[0] == undefined){
		res.send('No encontramos un héroe para mostrarte su biografía')
	}else if(req.params.ok){
		res.send(`
		Héroe: ${heroe[0].nombre}\n
		 || Reseña: ${heroe[0].resenia}`)
	}else{
		res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber más de mí :(`)
	}	
});

app.get('/creditos', function(req, res){
	res.send('Autor: Lucas Cardozo')
})

app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, tenemos un problema!');
});