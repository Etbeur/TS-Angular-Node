import {ExpressServer} from './server';
import { IDaoPetitChien } from './dao/idao-petit-chien';
import { DaoPetitChien } from './dao/dao-petit-chien';

new ExpressServer().run(1313);

let dao:IDaoPetitChien = new DaoPetitChien();

// dao.getAllDogs()
//     .then((chiens) => console.log(chiens))
//     .catch((error) => console.log(error));

// console.log(dao.getAllDogs());
// console.log(dao.getDogById(1));

// dao.addDog({
//     id: null,
//     nom: 'wouf',
//     race: 'berger',
//     birthDate: new Date() 
// });
// console.log(dao.getAllDogs()); 

// dao.removeDog({
//     id:2,
//     nom:null,
//     race:null,
//     birthDate:null
// });
// console.log(dao.getAllDogs());

// dao.updateDog({
//     id:4,
//     nom:'blabla',
//     race:'puissance',
//     birthDate: new Date()
// });
// console.log(dao.getAllDogs());





// let server = express();

// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended:false}));

// let route = express.Router();

// route.get('/first', function(request, response) {
//     response.json({
//         message: 'bravo'
//     });
// });

// server.use('/first-route', route);

//     server.listen(1313);