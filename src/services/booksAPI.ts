import axios from "axios";
class BooksAPI {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";
  private readonly ENDPOINTS = {
    new: "new",
    search: "search/",
  };
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNewBooks() {
    const { data } = await this.API.get(this.ENDPOINTS.new);
    return data;
  }

  public async getBooksBySearch(inputValue: any) {
    const { data } = await this.API.get(this.ENDPOINTS.search + inputValue);
    return data;
  }
}

export const booksAPI = new BooksAPI();
