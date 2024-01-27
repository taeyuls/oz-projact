interface IApiHandler<T> {
  fetchData(endpoint: string): Promise<T>;
}

class ApiHandler<T> implements IApiHandler<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint: string): Promise<T> {
    try {
      const response = await fetch(this.baseUrl + endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json() as T;
    } catch (error) {
      console.error('Fetching error:', error);
      throw error;
    }
  }
}

// 예시 사용법
async function main() {
  const apiHandler = new ApiHandler<any>('https://api.example.com');
  try {
    const data = await apiHandler.fetchData('/endpoint');
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

main();
