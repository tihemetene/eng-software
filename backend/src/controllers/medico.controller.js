const MedicoModel = require('../models/medico.model');

class MedicoController{
  async index(req, res){
    const data = await MedicoModel.find();
    res.send({data})
  }

  async store(req, res){
    const data = req.body;
    const medico = await MedicoModel.findOne({ login: data.login });
    if(medico){
      return res.status(400).send({ message: "login já cadastrado."})
    }
    console.log(data)
    const newMedico = await MedicoModel.create(data)
    res.send({medico: newMedico})
  }

  async getOne(req, res){
    const {id} = req.params;

    try{
      const medico = await MedicoModel.findById(id)
      res.send({medico})
    }catch(e){
      res.status(400).send({message: "Erro ao encontrar médico."})
    }
  }

  async update(req, res){
    const {params: {id}, body} = req;
    const medico = await MedicoModel.findByIdAndUpdate(id, body, {new: true});
      res.send({data: medico}); 
  }

  async remove(req, res){
    const {id} = req.params;
    try{
      const medico = await MedicoModel.findByIdAndDelete(id);
      if(medico){
        res.send({message: "Medico removido."})
      }throw new Error("Medico não encontrado.")
    }catch(e){
      res.status(400).send({message: e.message})
    }
  }
 }

module.exports = new MedicoController()