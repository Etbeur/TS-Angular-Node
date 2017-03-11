import {Router, Request, Response} from 'express';

/**
 * Les classes Router vont définir une nouvelle instance de Router puis inscrire les différentes
 * routes sur celui ci en implémentant les méthodes qui devront être éxécutées sur chaque route.
 */

export class FirstRouter {
    router:Router;
    private liste:string[];

    constructor() {
        this.router = Router();
        this.liste = ["ga", "zo", "bu"];
        this.routeInit();
    }

    /**
     * La méthode test sera appelé lorsqu'on accèdera à la route /test en Get sur ce routeur 
     */
    public test(request:Request, response:Response) {
        response.json({
            message:"yep yep it's all right"
        });
    }

    public lister(request:Request, response:Response) {
        response.json(this.liste);
    }

    public getItem(request:Request, response:Response) {
        // On peut récupérer les index de route via la request et son objet params.
        // Celui ci contiendra tous les arguments rendus disponibles par la définition
        // de la route (en string)
        let parameter = request.params.index;
        response.json({
            item: this.liste[parameter]
        });
    }

    /**
     * Méthode d'ajout d'un mot à la liste via une requête GET
     */
    public addItem(request:Request, response:Response) {
        let parameter = request.params.word;
        this.liste.push(parameter)
        response.json({
            add: "(" + parameter + ")" + ' a été ajouté avec succès',
            liste: this.liste
        });
    }

    /**
     * Méthode d'ajout d'un item à la liste via une requête POST
     */
    public addItemPost(request:Request, response:Response) {
        // Les paramètres d'une requête POST sont contenu dans le body de la requête.
        // Celui ci est converti en objet javascript par le body-parser que nous
        // avons inscrit en middleware de notre serveur.
        let parameter1 = request.body.test;
        this.liste.push(parameter1)
        response.json({
            msg: "votre mot a bien été ajouté à la liste",
            liste: this.liste
        });

    }

    /**
     * La méthode routeInit se charge d'inscrire les différentes méthodes de
     * la classe sur leur route correspondante
     */
    private routeInit() {
        this.router.get('/test', this.test);
        this.router.get('/lister', this.lister.bind(this));
        // On définit ici une route avec un argument, les arguments doivent
        // être précédés de ':'
        // le nom suivant les : sera le nom de la variable rendue disponibles
        // dans la request.params
        this.router.get('/item/:index', this.getItem.bind(this));
        this.router.get('/add/:word', this.addItem.bind(this));
        this.router.post('/ajout', this.addItemPost.bind(this));
    }
}