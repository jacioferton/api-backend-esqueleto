const express = require('express');
const Usuario = require('./usuarioModel');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const lista = await Usuario.findAll()
    res.send({ lista });
});

router.get('/:id', async (req, res) => {
    const usuario = await
    res.send({});
});

router.get('/matricula/:matricula', async (req, res) => {
    res.send({});
});

router.post('/', async (req, res) => {//salvar
    res.send({
    });
});

router.put('/:id', async (req, res) => {//atualizar
    res.send({

    });
});

router.delete('/:id', async (req, res) => {//delete
    res.status(204).send({

    });
});

router.post('/:id/atividade', async (req, res) => {
    res.send({

    });
});

router.put('/:id/atividade/:idAtividade', async (req, res) => {
    res.send({

    });
});

module.exports = router;