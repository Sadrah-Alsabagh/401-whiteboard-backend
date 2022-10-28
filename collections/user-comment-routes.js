'use strict';

class userCommentRoutes{
    constructor(model)
    {
        this.model=model;
    }

    async create (obj){
        try{
          return await this.model.create(obj);   
        }
       catch(e){
        console.error('Error during the creation');
       }
    }


    async read(id){
        try{
        if(id){
return await this.model.findOne({where: {id: id}});
        } else{
        return await this.model.findAll({where: {id: id}});
 
        }
        }catch(e){
            console.error(`Error during the read with the id: ${id}`);
        }
    }


    async update(id, obj)
    {
        try{
        const dataById = await this.model.findOne({where: {id}});
        return await dataById.update(obj);

        }
        catch(e){
            console.error(`Error during the update with the id: ${id}`);
        }
    }


    async delete(id){
        try{
    return await this.model.destroy({where: {id: id}})
        }
        catch(e)
        {
            console.error(`Error during the delete with the id: ${id}`);
        }
    }

    async readWithComment(Comment){
        try{
            return await this.model.findAll({include:[Comment]})
        }
        catch{
            console.error(`Error during reading the comment with the model: ${this.model.name}`); 
        }
    }
}

module.exports = userCommentRoutes;