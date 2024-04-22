// Klasė, kuri aprašo knygą
class Book {
    constructor(isbn, yearOfRelease, title, numberOfPage) {
      this.isbn = isbn;
      this.yearOfRelease = yearOfRelease;
      this.title = title;
      this.numberOfPage = numberOfPage;
    }
  
    newBook() {
      const currentYear = new Date().getFullYear();
      if (this.yearOfRelease === currentYear) {
        return ' (New Book)';
      } else {
        return '';
      }
    }
  }
  
  // Sukuriam knygų masyvą
  const Books = [
    new Book('978-609-406-150-9', 2023, 'Šnipų pakrantė', 368),
    new Book('978-609-406-151-6', 2021, 'Fahrenheit 451', 256),
    new Book('978-609-406-152-3', 2024, 'Meno kūrinių paslaptys', 432),
    new Book('978-609-406-153-0', 2022, 'Auksinis ruduo', 512),
    new Book('978-609-406-154-7', 2020, 'Moterų priežiūros namai', 320),
    new Book('978-609-406-155-4', 2024, 'Aikido: meno ir gyvenimo kelias', 288),
    new Book('978-609-406-156-1', 2023, 'Gyvenimo dovanos', 384),
    new Book('978-609-406-157-8', 2021, 'Rato ratas', 400),
    new Book('978-609-406-158-5', 2022, 'Alchemikas', 224),
    new Book('978-609-406-159-2', 2020, 'Nerijus: pasakos ir legenda', 368),
    new Book('978-609-406-160-8', 2024, 'Nerealiai miestai', 448),
    new Book('978-609-406-161-5', 2023, 'Muzikos magija', 336),
  ];
  
  // Funkcija, kuri išveda informaciją apie kiekvieną knygą ir bendrą knygų skaičių kiekvienoje kategorijoje
  function outputBookCatalog(arrayOfBooks) {
    const categories = {
      'grožinė literatūra': 0,
      'fantastika': 0,
      'menas': 0
    };
  
    arrayOfBooks.forEach(Book => {
      let category;
      if (Book.yearOfRelease === new Date().getFullYear()) {
        category = ' (New Book)';
      } else {
        category = '';
      }
  
      console.log(`${Book.title}: ISBN ${Book.isbn}, Leidimo metai ${Book.yearOfRelease}${Book.newBook()}, Puslapių skaičius ${Book.numberOfPage}`);
  
      // Atnaujiname kategorijų skaičių
      if (Book.title.toLowerCase().includes('fantastika')) {
        categories['fantastika']++;
      } else if (Book.title.toLowerCase().includes('menas')) {
        categories['menas']++;
      } else {
        categories['grožinė literatūra']++;
      }
    });
  
    // Išvedame bendrą knygų skaičių kiekvienoje kategorijoje
    console.log('\ncategories:');
    for (const category in categories) {
      console.log(`${category} (${categories[category]} knygų)`);
    }
  }
  
  // Iškviečiame funkciją, kuri išveda knygų katalogą
  outputBookCatalog(Books);
  