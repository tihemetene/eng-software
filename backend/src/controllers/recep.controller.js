const RecepModel = require('../models/recep.model');

class RecepController{
  async index(req, res){
    const data = await RecepModel.find();
    res.send({data})
  }

  async store(req, res){
    const data = req.body;
    const recep = await RecepModel.findOne({ login: data.login });
    if(recep){
      return res.status(400).send({ message: "login já cadastrado."})
    }
    console.log(data)
    const newRecep = await RecepModel.create(data)
    res.send({recep: newRecep})
  }

  async getOne(req, res){
    const {id} = req.params;

    try{
      const recep = await RecepModel.findById(id)
      res.send({recep})
    }catch(e){
      res.status(400).send({message: "Erro ao encontrar médico."})
    }
  }

  async update(req, res){
    const {params: {id}, body} = req;
    const recep = await RecepModel.findByIdAndUpdate(id, body, {new: true});
      res.send({data: recep}); 
  }

  async remove(req, res){
    const {id} = req.params;
    try{
      const recep = await RecepModel.findByIdAndDelete(id);
      if(recep){
        res.send({message: "Recepcionista removido."})
      }throw new Error("Recepcionista não encontrado.")
    }catch(e){
      res.status(400).send({message: e.message})
    }
  }
 }

module.exports = new RecepController()