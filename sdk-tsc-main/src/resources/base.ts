import fetch from 'isomorphic-unfetch';

type Config = {
  authToken: string;
  baseUrl?: string;
};

export abstract class Base {
  private authToken: string;
  private baseUrl: string;

  constructor(config: Config) {
    this.authToken = config.authToken;
    this.baseUrl = config.baseUrl || 'https://jsonplaceholder.typicode.com'; // Passing default URL
  }

  protected request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      'api-key': this.authToken // Authorization: 'Bearer <authToken>'
    };
    const config = {
      ...options,
      headers,
    };

    return fetch(url, config).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    });
  }
}