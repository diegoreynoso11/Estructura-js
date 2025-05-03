// "Conjunto de principios para escribir código que sea mantenible, escalable y fácil de entender."

// SOLID
import { RunOcp } from './SOLID/ocp.js'
import { RunSrp } from './SOLID/srp.js'
import { RunLsp } from './SOLID/lsp.js'
import { RunIsp } from './SOLID/isp.js'
import { RunDip } from './SOLID/dip.js'
// S: Single Responsibility Principle (SRP) Principio de Responsabilidad Única
RunSrp()
// O: Open/Closed Principle (OCP) Principio Abierto/Cerrado
RunOcp()
// L: Liskov Substitution Principle (LSP) Principio de Sustitución de Liskov
RunLsp()
// I: Interface Segregation Principle (ISP) Principio de Segregación de Interfaces
RunIsp()
// D: Dependency Inversion Principle (DIP) Principio de Inversión de Dependencias
RunDip()
