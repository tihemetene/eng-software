const {Router} = require('express');
const RecepController = require('../controllers/recep.controller');

const router = Router();

router.get('/recep', RecepController.index)
router.get('/recep/:id', RecepController.getOne)
router.put('/recep/:id', RecepController.update)
router.delete('/recep/:id', RecepController.remove)
router.post('/recep', RecepController.store)

module.exports = router;