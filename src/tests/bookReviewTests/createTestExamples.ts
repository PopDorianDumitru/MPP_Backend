import bookModel from "../../model/bookModel"
import bookReviewModel from "../../model/bookReviewModel"
const createBook = (ID: string, title: string, author: string, year: number, language: string) => {
    return {
        ID,
        title,
        author,
        year,
        language
    }
}

const createBookReview = (ID: string, content: string, bookId: string, rating: number, username: string, userId: string) => {
    return {
        ID,
        content,
        bookId,
        rating,
        username,
        userId
    }
}

const createTestExamples = async () => {
    bookModel.addBook(createBook("123456789", "The Great Gatsby", "F. Scott Fitzgerald", 1925, "English"));
    bookModel.addBook(createBook("234567890", "War and Peace", "Leo Tolstoy", 1869, "Russian"));
    bookModel.addBook(createBook("345678901", "Pride and Prejudice", "Jane Austen", 1813, "English"));


    bookReviewModel.addBookReview(createBookReview("123456789", "Great book", (await bookModel.getBooks())[0].ID, 5, "John", "123456789"));
    bookReviewModel.addBookReview(createBookReview("234567890", "Not a great book",  (await bookModel.getBooks())[0].ID, 2, "Jane", "234567890"));
    bookReviewModel.addBookReview(createBookReview("345678901", "I loved it",  (await bookModel.getBooks())[1].ID, 4, "Alice", "345678901"));
}

export default createTestExamples;