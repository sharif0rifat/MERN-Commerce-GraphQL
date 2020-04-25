import {Request, Response} from "express";

export class Routes {
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200)
                    .send({
                        message: 'GET request successful!'
                    })
            })

        app.route('/registration')

            .post((req: Request, res: Response) => {
                // Create new contact
                res.status(200).send({
                    message: 'POST request successfulll!!!!'
                })
            })
        
    }
}
