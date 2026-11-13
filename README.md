# Bancos de Venezuela — API y Catálogo Open Source 🇻🇪

API y catálogo público de **bancos de Venezuela** con **códigos bancarios oficiales (Sudeban / BCV)**, nombres oficiales, nombres cortos, RIF, colores institucionales y logotipos en PNG/SVG. 

Diseñado para ser consumido como **API gratuita de alta velocidad y 0 costo** a través de CDN global (jsDelivr), ideal para aplicaciones web, fintech, apps móviles y proyectos desplegados en **Vercel**, **Netlify**, **Cloudflare** o servidores propios.

[![Validar Catálogo](https://github.com/Dansware03/bancos-venezuela-codigos/actions/workflows/validate-json.yml/badge.svg)](https://github.com/Dansware03/bancos-venezuela-codigos/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/Dansware03/bancos-venezuela-codigos/badge)](https://www.jsdelivr.com/package/gh/Dansware03/bancos-venezuela-codigos)

---

## 🚀 Endpoints de la API (CDN Global Gratuita)

Consume el catálogo directamente en tu frontend o backend sin límite de peticiones, sin tokens y con soporte CORS abierto (`Access-Control-Allow-Origin: *`):

### 1. Datos en JSON
- **JSON Completo (Legible):**  
  `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/bancos.json`
- **JSON Minificado (Recomendado para Producción, < 4 KB):**  
  `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/bancos.min.json`

### 2. Logotipos de Bancos
Puedes cargar cualquier logo directamente usando la propiedad `filename`:
`https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images/{filename}`

*Ejemplos:*
- Banco de Venezuela: `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images/bdv.png`
- Banesco: `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images/banesco.png`
- Mercantil: `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images/mercantil.png`
- BBVA Provincial: `https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images/bbva-provincial.png`

---

## 📋 Estructura de cada Banco en la API

Cada objeto bancario contiene información detallada para adaptarse tanto a trámites formales como a interfaces de usuario compactas:

```typescript
export interface BancoVenezuela {
  codigo: string;        // Código de 4 dígitos Sudeban (ej. "0102", "0175")
  nombre: string;        // Razón social legal completa (ej. "Banco de Venezuela, S.A. Banco Universal")
  nombre_corto: string;  // Nombre amigable para UI/Selects (ej. "Banco de Venezuela")
  alias: string;         // Siglas o nombre común (ej. "BDV", "BDT")
  rif: string;           // RIF institucional (ej. "G200099976")
  color: string;         // Color primario de marca en Hex (ej. "#003882")
  pago_movil: boolean;   // Si está habilitado para Pago Móvil interbancario
  activo: boolean;       // Si la entidad se encuentra operativa
  filename: string;      // Nombre del archivo de imagen en la carpeta images/
}
```

---

## 💻 Ejemplos de Integración

### JavaScript / TypeScript (Fetch Nativo)
```javascript
const URL_API = 'https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/bancos.min.json';

async function obtenerBancos() {
  const respuesta = await fetch(URL_API);
  const bancos = await respuesta.json();
  
  // Buscar banco por código
  const bdv = bancos.find(b => b.codigo === '0102');
  console.log(bdv.nombre_corto); // "Banco de Venezuela"
  console.log(bdv.color);        // "#003882"
}
```

### React / Next.js (Vercel Free)
```tsx
import Image from 'next/image';

const BASE_CDN = 'https://cdn.jsdelivr.net/gh/Dansware03/bancos-venezuela-codigos@main/images';

export function SelectorBancos({ bancos, onSelect }) {
  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {bancos.map((b) => (
        <option key={b.codigo} value={b.codigo}>
          {b.codigo} - {b.nombre_corto} ({b.alias})
        </option>
      ))}
    </select>
  );
}
```

---

## 🏦 Catálogo Auditado de Bancos Venezolanos (27 Entidades)

Todos los códigos han sido auditados y cotejados contra las resoluciones oficiales de la **SUDEBAN** y el **Banco Central de Venezuela (BCV)**:

| Código | Nombre Corto | Razón Social Completa | Alias | RIF | Color | Pago Móvil |
|:---:|:---|:---|:---:|:---:|:---:|:---:|
| **0102** | Banco de Venezuela | Banco de Venezuela, S.A. Banco Universal | `BDV` | G200099976 | `#003882` | ✅ |
| **0104** | Venezolano de Crédito | Venezolano de Crédito, S.A. Banco Universal | `BVC` | J000029709 | `#003d79` | ✅ |
| **0105** | Mercantil Banco | Mercantil Banco, C.A. Banco Universal | `Mercantil` | J000029610 | `#002d72` | ✅ |
| **0108** | BBVA Provincial | BBVA Provincial, S.A. Banco Universal | `Provincial` | J000029679 | `#004481` | ✅ |
| **0114** | Bancaribe | Bancaribe C.A. Banco Universal | `Bancaribe` | J000029490 | `#005596` | ✅ |
| **0115** | Banco Exterior | Banco Exterior C.A. Banco Universal | `Exterior` | J000029504 | `#0072ce` | ✅ |
| **0128** | Banco Caroní | Banco Caroní C.A. Banco Universal | `Caroní` | J095048551 | `#004990` | ✅ |
| **0134** | Banesco | Banesco, Banco Universal S.A.C.A. | `Banesco` | J070133805 | `#007a3d` | ✅ |
| **0137** | Banco Sofitasa | Banco Sofitasa, Banco Universal | `Sofitasa` | J090283846 | `#cc0000` | ✅ |
| **0138** | Banco Plaza | Banco Plaza, Banco Universal | `Plaza` | J002970553 | `#002855` | ✅ |
| **0146** | Bangente | Bangente C.A | `Bangente` | J301442040 | `#e67300` | ✅ |
| **0151** | Banco Fondo Común | BFC Banco Fondo Común C.A. Banco Universal | `BFC` | J000723060 | `#00529b` | ✅ |
| **0156** | 100% Banco | 100% Banco, Banco Universal C.A. | `100% Banco` | J085007768 | `#ed1c24` | ✅ |
| **0157** | DelSur | DelSur Banco Universal C.A. | `DelSur` | J000797234 | `#005ba4` | ✅ |
| **0163** | Banco del Tesoro | Banco del Tesoro, C.A. Banco Universal | `Tesoro` | G200051876 | `#800020` | ✅ |
| **0166** | Banco Agrícola | Banco Agrícola de Venezuela, C.A. Banco Universal | `BAV` | G200057955 | `#2e7d32` | ✅ |
| **0168** | Bancrecer | Bancrecer, S.A. Banco Microfinanciero | `Bancrecer` | J316374173 | `#006837` | ✅ |
| **0169** | R4 Banco Microfinanciero | R4 Banco Microfinanciero, C.A. | `R4 Banco (Mi Banco)` | J315941023 | `#0083ca` | ✅ |
| **0171** | Banco Activo | Banco Activo, Banco Universal | `Activo` | J080066227 | `#0072bc` | ✅ |
| **0172** | Bancamiga | Bancamiga, Banco Universal C.A. | `Bancamiga` | J316287599 | `#00a859` | ✅ |
| **0173** | Banco Int. de Desarrollo | Banco Internacional de Desarrollo, C.A. Banco Universal | `BID` | J294640109 | `#003366` | ❌ |
| **0174** | Banplus | Banplus Banco Universal, C.A | `Banplus` | J000423032 | `#e4002b` | ✅ |
| **0175** | Banco Digital de los Trabajadores | Banco Digital de Los Trabajadores, Banco Universal, C.A. | `BDT (Bicentenario)` | G200091487 | `#004b87` | ✅ |
| **0177** | BANFANB | Banco de la Fuerza Armada Nacional Bolivariana, B.U. | `BANFANB` | G200106573 | `#2d4a22` | ✅ |
| **0178** | N58 Banco Digital | N58 Banco Digital, S.A. Banco Microfinanciero S.A. | `N58` | J503581107 | `#5b2c6f` | ✅ |
| **0191** | Banco Nacional de Crédito | Banco Nacional de Crédito, C.A. Banco Universal | `BNC` | J309841327 | `#004080` | ✅ |
| **0601** | IMCP | Instituto Municipal de Crédito Popular | `IMCP` | J000145903 | `#4a4a4a` | ❌ |

---

## ⚖️ Licencia y Uso de Marcas

- **Código y Catálogo:** Publicado bajo la licencia de código abierto [MIT](./LICENSE).
- **Descargo sobre Marcas:** Todos los nombres comerciales, logotipos e identificadores bancarios son marcas registradas propiedad de sus respectivas instituciones financieras. Se emplean en este repositorio exclusivamente con fines de identificación técnica y nominativa (*Nominative Fair Use*).

---

*Mantenido por [Maiker Bravo (@Dansware03)](https://github.com/Dansware03).*
