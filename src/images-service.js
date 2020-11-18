export default class NasaAPI {
  static async imageCall() {
    try {
      const response = await fetch(
        `images-api.nasa.gov/search?keywords=${searchTerm}`
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
