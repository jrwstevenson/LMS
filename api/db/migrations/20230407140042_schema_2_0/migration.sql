/*
  Warnings:

  - You are about to drop the column `contractId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `contactId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `note` on the `Payment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_contractId_fkey";

-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_jobId_fkey";

-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_buildingId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_contactId_fkey";

-- AlterTable
ALTER TABLE "Building" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Building_id_seq";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "contractId",
DROP COLUMN "jobId",
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Category_id_seq";

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "buildingId" INTEGER;

-- AlterTable
ALTER TABLE "Contract" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Contract_id_seq";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "buildingId" DROP NOT NULL;
DROP SEQUENCE "Job_id_seq";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "companyId",
DROP COLUMN "contactId",
DROP COLUMN "note",
ADD COLUMN     "notes" TEXT;

-- CreateTable
CREATE TABLE "_CategoryToContract" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToJob" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToContract_AB_unique" ON "_CategoryToContract"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToContract_B_index" ON "_CategoryToContract"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToJob_AB_unique" ON "_CategoryToJob"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToJob_B_index" ON "_CategoryToJob"("B");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contact" ADD CONSTRAINT "Contact_buildingId_fkey" FOREIGN KEY ("buildingId") REFERENCES "Building"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToContract" ADD CONSTRAINT "_CategoryToContract_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToContract" ADD CONSTRAINT "_CategoryToContract_B_fkey" FOREIGN KEY ("B") REFERENCES "Contract"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToJob" ADD CONSTRAINT "_CategoryToJob_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToJob" ADD CONSTRAINT "_CategoryToJob_B_fkey" FOREIGN KEY ("B") REFERENCES "Job"("id") ON DELETE CASCADE ON UPDATE CASCADE;
