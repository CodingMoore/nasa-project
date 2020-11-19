export default class Insight {
  static async getStats() {
    try {
      const response = await fetch (`https://api.nasa.gov/insight_weather/?api_key=${process.env.MARS_API_KEY}&feedtype=json&ver=1.0`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch (error) {
      return error.message;
    }
  }
}