-- CreateTable
CREATE TABLE "ExplorerCertfication" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "missionCommander" TEXT NOT NULL,
    "enrolements" INTEGER NOT NULL,
    "hasCertificacion" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ExplorerCertfication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExplorerCertfication_name_key" ON "ExplorerCertfication"("name");
