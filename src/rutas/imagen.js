const { Router } = require('express'); 
const path = require('path');

const router = Router();

 

router.get('/', async (req, res) => {
   res.render('index');
});

router.post('/imagen/subir', (req, res) => {
    res.send('LA IMAGEN SUBIDA EXITOSAMENTE');
}); 

module.exports = router;