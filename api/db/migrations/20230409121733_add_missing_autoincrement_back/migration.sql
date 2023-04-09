/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Building` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Building` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE building_id_seq;
ALTER TABLE "Building" DROP COLUMN "createdAt",
DROP COLUMN "description",
ALTER COLUMN "id" SET DEFAULT nextval('building_id_seq'),
ALTER COLUMN "address" DROP NOT NULL;
ALTER SEQUENCE building_id_seq OWNED BY "Building"."id";

-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";

-- AlterTable
CREATE SEQUENCE contract_id_seq;
ALTER TABLE "Contract" ALTER COLUMN "id" SET DEFAULT nextval('contract_id_seq');
ALTER SEQUENCE contract_id_seq OWNED BY "Contract"."id";

-- AlterTable
CREATE SEQUENCE job_id_seq;
ALTER TABLE "Job" ALTER COLUMN "id" SET DEFAULT nextval('job_id_seq');
ALTER SEQUENCE job_id_seq OWNED BY "Job"."id";
