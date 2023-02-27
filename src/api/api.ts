export default class Api {
  protected static readonly baseUrl: string = "https://dummyjson.com";
  private static async fetchData(
    path: string,
    requestOptions: any
  ): Promise<any> {
    try {
      return await this.fetchDataRaw(path, requestOptions);
    } catch (e) {
      throw new Error(`API line 17 ${e}`);
    }
  }
  private static async fetchDataRaw(
    path: string,
    requestOptions: any
  ): Promise<Response> {
    const res = await fetch(`${this.baseUrl}${path}`, requestOptions);
    return await res.json();
  }

  public static async postData(
    path: string,
    data?: any,
    method?: string,
    isTokenRequired = true
  ): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: {
      method: string;
      headers: Headers;
      body: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: method ? method : "POST",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return this.fetchData(path, requestOptions);
  }
  public static async deleteData(path: string, data?: any): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: {
      method: string;
      headers: Headers;
      body: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };
    return this.fetchData(path, requestOptions);
  }
  public static async updateData(path: string, data: any): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: {
      method: string;
      headers: Headers;
      body: string;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
    };

    return this.fetchData(path, requestOptions);
  }

  public static async getData(path: string): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: {
      method: string;
      headers: Headers;
      redirect: "follow" | "error" | "manual" | undefined;
    } = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    return this.fetchData(path, requestOptions);
  }
}
