const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


(async function main() {
    try {
        await prisma.explorerCertfication.upsert({
            where: { name: "Juan" },
            update: {},
            create: {
                name: "Juan",
                lang: "English",
                missionCommander: "Rodrigo",
                enrolements: 10,
                hasCertificacion: true
            },
        });

        await prisma.explorerCertfication.upsert({
            where: { name: "Ernesto" },
            update: {},
            create: {
                name: "Ernesto",
                lang: "English",
                missionCommander: "Carlo",
                enrolements: 50,
                hasCertificacion: true
            },
        });

        await prisma.explorerCertfication.upsert({
            where: { name: "Kevin" },
            update: {},
            create: {
                name: "Kevin",
                lang: "French",
                missionCommander: "Fernanda",
                enrolements: 30,
                hasCertificacion: true
            },
        });

        await prisma.explorerCertfication.upsert({
            where: { name: "Jose" },
            update: {},
            create: {
                name: "Jose",
                lang: "German",
                missionCommander: "Carlo",
                enrolements: 30,
                hasCertificacion: true
            },
        });

        await prisma.explorerCertfication.upsert({
            where: { name: "Jocelyn" },
            update: {},
            create: {
                name: "Jocelyn",
                lang: "German",
                missionCommander: "Carlo",
                enrolements: 30,
                hasCertificacion: true
            },
        });

        console.log("Create 5 explorers");
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();