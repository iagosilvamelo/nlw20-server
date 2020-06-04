import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemsController {

    /**
     * Show all items table
     *
     * @param express.Request request
     * @param express.Response response
     * @return express.response.json
    */
    async index (request: Request, response: Response) {
        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`
            }
        })
    
        return response.json(serializedItems)
    }
}

export default ItemsController