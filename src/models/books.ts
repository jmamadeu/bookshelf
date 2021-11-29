export type BookCategoryResponseType = {
  results: Array<BookCategoryType>;
};

export type BookCategoryType = {
  display_name: String;
  list_name_encoded: String;
};

export type BookProperties = {
  publisher: string;
  author: string;
  title: string;
  description: string;
  price: string;
  book_image: string;
  book_uri: string;
};

type BookListType = {
  books: BookProperties[];
};

export type BookResponseType = {
  results: {
    lists: BookListType[];
  };
};