"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookModel_1 = __importDefault(require("../../model/bookModel"));
const createBook = (ID, title, author, year, language) => {
    return {
        ID,
        title,
        author,
        year,
        language
    };
};
const createTestExamples = () => {
    bookModel_1.default.addBook(createBook("123456789", "The Great Gatsby", "F. Scott Fitzgerald", 1925, "English"));
    bookModel_1.default.addBook(createBook("234567890", "War and Peace", "Leo Tolstoy", 1869, "Russian"));
    bookModel_1.default.addBook(createBook("345678901", "Pride and Prejudice", "Jane Austen", 1813, "English"));
};
exports.default = createTestExamples;
