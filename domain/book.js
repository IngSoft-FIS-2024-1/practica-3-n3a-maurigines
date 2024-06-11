class Book {
  #title;
  #author;
  #pages;
  #words;

  constructor(title, author, pages, words = 0) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPages(pages);
    this.setWords(words);
  }

  getTitle() {
    return this.#title;
  }

  getAuthor() {
    return this.#author;
  }

  getPages() {
    return this.#pages;
  }

  getWords() {
    return this.#words;
  }

  setTitle(title) {
    if (typeof title !== 'string') {
      throw new Error('El título debe ser una cadena');
    }
    title = title.trim();
    if (title.length === 0) {
      throw new Error('El título no puede estar vacío');
    }
    this.#title = title;
  }

  setAuthor(author) {
    if (typeof author !== 'string') {
      throw new Error('El autor debe ser una cadena');
    }
    author = author.trim();
    if (author.length === 0) {
      author = 'Anónimo';
    }
    this.#author = author;
  }

  setPages(pages) {
    if (typeof pages !== 'number' || isNaN(pages)) {
      throw new Error('Las páginas deben ser un número válido');
    }
    if (pages < 1) {
      throw new Error('El número de páginas debe ser mayor a 0');
    }
    pages = Math.trunc(pages);
    this.#pages = pages;
  }

  setWords(words) {
    if (typeof words !== 'number' || isNaN(words)) {
      throw new Error('Las palabras deben ser un número válido');
    }
    if (words < 0) { 
      throw new Error('El número de palabras no puede ser negativo');
    }
    words = Math.trunc(words);
    this.#words = words;
  }

  wordsPerPage() {
    return this.#words / this.#pages;
  }

  toString() {
    return `Título: ${this.#title} Autor: ${this.#author} Páginas: ${this.#pages} Palabras: ${this.#words}`;
  }
}

export default Book;
