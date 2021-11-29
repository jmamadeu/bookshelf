import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { BookProperties, BookResponseType } from "../models/books";
import { api, API_KEY } from "../services/api";

const fetchBookOverview = async () => {
  const { data } = await api.get<BookResponseType>(`/overview.json?${API_KEY}`);

  let dataParsed: BookProperties[] = [];

  data.results.lists.forEach((list) => {
    const books = list.books.map((book) => ({
      publisher: book.publisher,
      author: book.author,
      title: book.title,
      description: book.description,
      price: book.price,
      book_image: book.book_image,
      book_uri: book.book_uri,
    }));

    dataParsed.push(...books);
  });

  return dataParsed;
};

export function useBooks() {
  return useQuery<BookProperties[], AxiosError>("books", fetchBookOverview);
}
