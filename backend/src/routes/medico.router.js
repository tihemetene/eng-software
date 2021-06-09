const {Router} = require('express');
const medicoController = require('../controllers/medico.controller');

const router = Router();

router.get('/medico', medicoController.index)
router.get('/medico/:id', medicoController.getOne)
router.put('/medico/:id', medicoController.update)
router.delete('/medico/:id', medicoController.remove)
router.post('/medico', medicoController.store)


module.exports = router;