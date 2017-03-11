import { DogService } from './dog-service';
import { AjaxManager } from './ajax-manager';



let dog = new DogService();

dog.getDogById()
    .then((chien) => console.log(chien))
    .catch((error) => console.log(error))


