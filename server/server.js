const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../dist')));


// app.use('/', (req,res)=>{
//     res.sendStatus(200)
// })


// Listening port
app.listen(PORT, () => {
	console.log(`Kubehawk monitor listening on port ${PORT}`);
});
