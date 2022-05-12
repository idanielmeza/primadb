const {Router} = require('express');
const {getAllCertification, getCertificationById, createCertification, updateCertification, deleteCertification} = require('../controllers/certificationController');

const router = Router();

router.get('/', getAllCertification)

router.get('/:id', getCertificationById)

router.post('/', createCertification)

router.put('/:id', updateCertification)

router.delete('/:id', deleteCertification)

module.exports = router;

