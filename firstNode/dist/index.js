"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const dao_petit_chien_1 = require("./dao/dao-petit-chien");
new server_1.ExpressServer().run(1313);
let dao = new dao_petit_chien_1.DaoPetitChien();
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
//# sourceMappingURL=index.js.map