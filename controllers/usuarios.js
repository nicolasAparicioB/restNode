const {response,request} = require('express'); 

const usuariosGet = (req= request, res=response) =>{
  const {q, nombre} = req.query;
    res.json({
        msg:'get API',
        q,
        nombre
    })
  }

  const usuariosPut =  (req, res) => {
    const {id} = req.params;
    res.json({
        msg:'put API',
        id
    })
  }


  const usuariosPost =  (req, res) => {

    const {nombre, edad} = req.body;
    res.status(201).json({
        msg:'post API',
        nombre,
        edad
    })
  }

  const usuariosDelete=  (req, res) => {
    res.json({
        msg:'delete API'
    })
  }

  const usuariosPatch =  (req, res) => {
    res.json({
        msg:'patch API'
    })
  }

  module.exports ={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
  }