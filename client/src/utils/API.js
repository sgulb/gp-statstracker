//TODO This is only a boilerplate not being used at the momment copied from books application

import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all books
  getGrades: function() {
    return axios.get("/api/grades");
  },
  // Gets the book with the given id
  getGrade: function(id) {
    return axios.get("/api/grades/" + id);
  },
  // Deletes the book with the given id
  deleteGrade: function(id) {
    return axios.delete("/api/grades/" + id);
  },
  // Saves a book to the database
  saveGrade: function(gradeData) {
    return axios.post("/api/grades", gradeData);
  },

};
