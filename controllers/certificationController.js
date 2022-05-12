const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllCertification = async(req,res)=>{

    const certifications = await prisma.explorerCertfication.findMany({});
    res.json(certifications);
}

const getCertificationById = async(req,res)=>{
    const id = req.params.id;
    const certification = await prisma.explorerCertfication.findUnique({ where: { id: parseInt(id) } });
    res.json(certification);
}

const createCertification = async(req,res)=>{
    const certification = {
        name: req.body.name,
        lang: req.body.lang,
        missionCommander: req.body.missionCommander,
        enrolements: req.body.enrolements,
        hasCertificacion: req.body.hasCertificacion
    }
    const message = 'Certification creado.';
    await prisma.explorerCertfication.create({ data: certification });
    return res.json({ message });
}

const updateCertification = async(req,res)=>{
    const id = parseInt(req.params.id);
    await prisma.explorerCertfication.update({
        where: {
            id: id
        },
        data: {
            name: req.body.name,
            lang: req.body.lang,
            missionCommander: req.body.missionCommander,
            enrolements: req.body.enrolements,
            hasCertificacion: req.body.hasCertificacion
        }
    })
    return res.json({ message: "Actualizado correctamente" });
}

const deleteCertification = async(req,res)=>{
    const id = parseInt(req.params.id);
    await prisma.explorerCertfication.delete({ where: { id: id } });
    return res.json({ message: "Eliminado correctamente" });
}

module.exports = {
    getAllCertification,
    getCertificationById,
    createCertification,
    updateCertification,
    deleteCertification
}