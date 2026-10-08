import mongoose from "mongoose";
import dotenv from "dotenv";
import { Product } from "./models/product.model.js";

dotenv.config();

const initialProducts = [
  { name: "Laptop ASUS ROG", price: 650000, category: "computer" },
  { name: "MacBook Pro 16", price: 1200000, category: "computer" },
  { name: "iPhone 15 Pro", price: 580000, category: "phone" },
  { name: "Samsung Galaxy S24", price: 520000, category: "phone" },
  { name: "Xiaomi Redmi Note 13", price: 120000, category: "phone" },
  { name: "Игровая мышь Logitech", price: 35000, category: "other" },
  { name: "Механическая клавиатура Keychron", price: 55000, category: "other" },
  { name: "Монитор Dell 27 4K", price: 240000, category: "computer" }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/shop");
    await Product.deleteMany({});
    await Product.insertMany(initialProducts);
    console.log("=== Успех: База данных заполнена 8 тестовыми товарами ===");
    process.exit(0);
  } catch (err) {
    console.error("Ошибка при заполнении базы:", err);
    process.exit(1);
  }
}

seed();