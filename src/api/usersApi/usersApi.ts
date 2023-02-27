import Api from "../api";
import { LoginedUser } from "./types/types";
import { ILoginForm } from "../../ entities/auth/interfase";

export default class AuthApi {
  public static async login(request: ILoginForm): Promise<LoginedUser> {
    return Api.postData(`/auth/login`, request);
  }
}
