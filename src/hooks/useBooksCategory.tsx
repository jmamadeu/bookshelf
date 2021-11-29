import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { BookCategoryResponseType, BookCategoryType } from "../models/books";
import { api, API_KEY } from "../services/api";

const fetchBookCategories = async () => {
  const { data } = await api.get<BookCategoryResponseType>(
    `/names.json?${API_KEY}`
  );
  const dataParsed: BookCategoryType[] = data.results.map((book) => ({
    display_name: book.display_name,
    list_name_encoded: book.list_name_encoded,
  }));

  return dataParsed;
};

export function useBooksCategory() {
  return useQuery<BookCategoryType[], AxiosError>(
    "booksCategory",
    fetchBookCategories
  );
}
