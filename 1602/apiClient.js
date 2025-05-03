export class ApiClient {
  async post (url, data) {
    // Simular llamada a la "API"
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url !== '/orders') {
          reject(new Error('URL no válida'))
        }
        if (url === '/orders' && data) {
          resolve({ success: true, data })
        } else {
          reject(new Error('Error en la API'))
        }
      }, 500)
    })
  }
}
