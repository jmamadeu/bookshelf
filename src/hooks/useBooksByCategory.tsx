import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { BookProperties } from "../models/books";
import { api, API_KEY } from "../services/api";

const fetchBooksByCategory = async (category: string) => {
  const { data } = await api.get<{ results: { books: BookProperties[] } }>(
    `/${category}.json?${API_KEY}`
  );

  return data.results.books;
};

export function useBooksByCategory(category: string) {
  return useQuery<BookProperties[], AxiosError>(
    ["booksCategory", category],
    () => fetchBooksByCategory(category)
  );
}
