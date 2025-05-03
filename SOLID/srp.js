// S: Single Responsibility Principle (SRP) Principio de Responsabilidad Única
// cada módulo o clase debe tener una única responsabilidad o tarea
const TITLE = 'Single Responsibility Principle (SRP)'
export function RunSrp () {
  console.log(`\n----------------- ${TITLE} -----------------\n`)
  // ❌ sin SRP -- esta clase tiene más de una responsabilidad (crear el reporte y guardar el reporte)
  console.log('\nsin SRP -----------------\n')
  class Report {
    constructor (data) {
      this.data = data
    }

    generateReport () {
      console.log('Generando reporte...')
      return JSON.stringify(this.data)
    }

    saveToFile (content, filePath) {
      console.log(`Guardando reporte en "${filePath}", -- Contenido :`, content)
    }
  }

  const report = new Report([{ name: 'Steve', age: 45 }])
  const content = report.generateReport()
  report.saveToFile(content, 'reporte-sin-SRP.txt')

  // ✅ con SRP
  console.log('\ncon SRP -----------------\n')
  class ReportSRP {
    constructor (data) {
      this.data = data
    }

    generateReport () {
      console.log('Generando reporte...')
      return JSON.stringify(this.data)
    }
  }

  class FileSaver {
    saveToFile (filePath, content) {
      console.log(`Guardando contenido en "${filePath}" -- Contenido :`, content)
    }
  }

  const reportSRP = new ReportSRP([{ name: 'John', age: 30 }])
  const fileSaver = new FileSaver()

  const reportContent = reportSRP.generateReport()
  fileSaver.saveToFile('reporte-con-SRP.txt', reportContent)
  console.log(`\n----------------- ${TITLE} -----------------\n`)
}
