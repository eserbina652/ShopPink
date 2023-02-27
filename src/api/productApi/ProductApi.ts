import Api from "../api";
import { Products } from "./types/productTypes";
import { ISearchedUser, User } from "../usersApi/types/types";
import { ISearchedPost } from "../../screens/friend/types/types";

export default class ProductApi {
  public static getLoginedUsers(userId: number): Promise<User> {
    return Api.getData(`/users/${userId}`);
  }
  public static async getAllCategories(): Promise<string[]> {
    return Api.getData("/products/categories");
  }

  public static getCurrentCategory(category: string): Promise<Products> {
    return Api.getData(`/products/category/${category}`);
  }

  public static getSearchedProduct(searchedText: string): Promise<Products> {
    return Api.getData(`/products/search?q=${searchedText}`);
  }

  public static getSearchedUser(userName: string): Promise<ISearchedUser> {
    return Api.getData(`/users/search?q=${userName}`);
  }

  public static getUserPost(userId: number): Promise<ISearchedPost> {
    return Api.getData(`/posts/user/${userId}`);
  }
}
