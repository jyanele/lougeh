/*
  Warnings:

  - You are about to drop the column `supplierId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_supplierId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "supplierId";

-- CreateTable
CREATE TABLE "SupplierProduct" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,

    CONSTRAINT "SupplierProduct_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SupplierProduct" ADD CONSTRAINT "SupplierProduct_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierProduct" ADD CONSTRAINT "SupplierProduct_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
