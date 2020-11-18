export default class NasaAPI {
  static async imageCall(searchTerm) {
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?keywords=${searchTerm}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}