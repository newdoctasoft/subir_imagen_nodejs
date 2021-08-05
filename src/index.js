const express = require('express'); 
const ejs = require('ejs'); 
const path = require('path');
const multer=require('multer'); 
const uuid=require('uuid/v4'); 
 
 

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs');

// middlewares 
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img/uploads'),
    filename: (req, file, cb, filename) => {
        console.log(file);
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({storage}).single('imagen'));
 
 
app.use(require('./rutas/imagen'));   
//app.use(require('./routes/index.routes'));
app.use(express.static(path.join(__dirname,'public')));

//
    
// Start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});