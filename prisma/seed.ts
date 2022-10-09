import { PrismaClient } from "@prisma/client";
import * as argon from 'argon2'

const prisma = new PrismaClient()

const customers = [
   {
      "fullname": "Humberto Antonio Donato Pecorino",
      "contact": "1234567489",
      "address": "Clean Manor, Los Santos",
      "username": "hankpecker",
      "password": "password"
   },
   {
      "fullname": "Mr. Kebun",
      "contact": "1234567488",
      "address": "Little Soul, Los Santos",
      "username": "kebun",
      "password": "password"
   },
   {
      "fullname": "Lang Buddha",
      "contact": "1234567487",
      "address": "Clean Manor, Los Santos",
      "username": "lang",
      "password": "password"
   },
   {
      "fullname": "Avon Barksdale",
      "contact": "1234567486",
      "address": "Maldini's Pizzeria, Los Santos",
      "username": "liriktheking",
      "password": "password"
   },
   {
      "fullname": "Annie May",
      "contact": "1234567485",
      "address": "UwU Café, Los Santos",
      "username": "weebcommander69",
      "password": "password"
   }
]

const products = [
   {
      "name": "The Bleeder Burger",
      "description": "Delicious.",
      "quantity": 10,
      "price": 15,
      "barcode": "6969420420"
   },
   {
      "name": "Om Nom Omurice",
      "description": "Delicious.",
      "quantity": 15,
      "price": 10,
      "barcode": "42069"
   },
   {
      "name": "Boe Label Wine",
      "description": "Intoxicating.",
      "quantity": 20,
      "price": 25,
      "barcode": "444333222"
   }
]

const suppliers = [
   {
      name: "Maldini's Pizzeria",
      contact: "8321112",
      address: "Little Seoul, Los Santos",
   },
   {
      name: "UwU Café",
      contact: "8321444",
      address: "Calais Avenue, Little Seoul, Los Santos",
   },
   {
      name: "Burger Shot",
      contact: "8321555",
      address: "Prosperity Street, San Andreas Avenue, Los Santos",
   }
]

async function main() {
   const productTbl = await prisma.product.count()
   const customerTbl = await prisma.customer.count()
   const supplierTbl = await prisma.supplier.count()
   if (productTbl == 0) productSeeder()
   if (customerTbl == 0) customerSeeder()
   if (supplierTbl == 0) supplierSeeder()
}

async function customerSeeder() {
   for (let customer of customers) {
      let hash = await argon.hash(customer.password)
      await prisma.customer.create({
         data: {
            fullname: customer.fullname,
            contact: customer.contact,
            address: customer.address,
            username: customer.username,
            password: hash
         }
      })
   }
}

async function supplierSeeder() {
   for (let supplier of suppliers) {
      await prisma.supplier.create({
         data: {
            name: supplier.name,
            contact: supplier.contact,
            address: supplier.address
         }
      })
   }
}

async function productSeeder() {
   for (let product of products) {
      await prisma.product.create({
         data: {
            name: product.name,
            description: product.description,
            quantity: product.quantity,
            price: product.price,
            barcode: product.barcode
         }
      })
   }
}

main()
   .then(async () => {
      await prisma.$disconnect()
   })
   .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
   })