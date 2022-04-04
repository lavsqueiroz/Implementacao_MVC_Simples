const Clientes = require('../Models/ClienteModel')


module.exports = {
    //toda uma função que é anexada a uma rota no express
    // chega o (req, res)
    //quando não espera nada coloca um _


    create: async (req, res) => {
        //criar novo produto    
        await Clientes.create(req.body)
        return res.redirect('/Cliente/listaCliente')
    },
    list: async (_, res) => {
        const clientes = await Clientes.findAll()
        return res.render('Cliente/listaCliente', {clientes})
    },
    form: (_,res) => res.render('Cliente/formularioCliente'),
}