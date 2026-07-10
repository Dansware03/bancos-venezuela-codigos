# Venezuelan Banks · Bancos de Venezuela 🇻🇪

Catálogo de **bancos de Venezuela** con **códigos bancarios**, RIF y logos en JSON. Incluye los códigos de 4 dígitos usados en transferencias, **pago móvil** y validación de cuentas.

Recurso de apoyo para integrar fácilmente en otros proyectos: apps de pagos, P2P, transferencias, validadores de cuentas y fintech venezolana.

## Estructura

```
.
├── bancos.json      # Datos de cada banco
└── images/          # Logos en PNG
```

## Campos del JSON

| Campo      | Tipo   | Descripción                                      |
|------------|--------|--------------------------------------------------|
| `codigo`   | string | Código de 4 dígitos del banco (ej. `"0102"`)     |
| `nombre`   | string | Nombre oficial del banco                         |
| `rif`      | string | RIF del banco                                    |
| `filename` | string | Nombre del archivo de logo en `images/`          |

## Bancos

| Código | Banco | RIF | Logo |
|--------|-------|-----|------|
| 0102 | Banco de Venezuela | G200099976 | `bdv.png` |
| 0104 | Venezolano de Crédito | J000029709 | `bvc.png` |
| 0105 | Mercantil Banco | J000029610 | `mercantil.png` |
| 0108 | BBVA Provincial | J000029679 | `bbva-provincial.png` |
| 0114 | Bancaribe | J000029490 | `bancaribe.png` |
| 0115 | Banco Exterior | J000029504 | `banco-exterior.png` |
| 0128 | Banco Caroní | J095048551 | `banco-caroni.png` |
| 0134 | Banesco | J070133805 | `banesco.png` |
| 0137 | Banco Sofitasa | J090283846 | `sofitasa.png` |
| 0138 | Banco Plaza | J002970553 | `banco-plaza.png` |
| 0146 | Bangente | J301442040 | `bangente.png` |
| 0151 | BFC Banco Fondo Común | J000723060 | `bfc-banco-fondo-comun.png` |
| 0156 | 100% Banco | J085007768 | `100_banco.png` |
| 0157 | DelSur | J000797234 | `delsur.png` |
| 0163 | Banco del Tesoro | G200051876 | `banco-del-tesoro.png` |
| 0166 | Banco Agrícola de Venezuela | G200057955 | `banco-agricola.png` |
| 0168 | Bancrecer | J316374173 | `bancrecer.png` |
| 0169 | Mi Banco | J315941023 | `mibanco.png` |
| 0171 | Banco Activo | J080066227 | `activo.png` |
| 0172 | Bancamiga | J316287599 | `bancamiga.png` |
| 0173 | Banco Internacional de Desarrollo | J294640109 | `banco-internacional-de-desarrollo.png` |
| 0174 | Banplus | J000423032 | `banplus.png` |
| 0007 | Banco Digital de Los Trabajadores | G200091487 | `banco-digital-trabajadores.png` |
| 0177 | BANFANB | G200106573 | `banfanb.png` |
| 0178 | N58 Banco Digital | J503581107 | `n58-banco.png` |
| 0191 | Banco Nacional de Crédito | J309841327 | `Banco_Nacional_de_Credito.png` |
| 0601 | Instituto Municipal de Crédito Popular | J000145903 | `imcp.png` |

## Uso rápido

```javascript
import bancos from './bancos.json';

// Buscar por código
const banco = bancos.find(b => b.codigo === '0102');

// Ruta del logo
const logo = `./images/${banco.filename}`;
```

```python
import json

with open('bancos.json') as f:
    bancos = json.load(f)

banco = next(b for b in bancos if b['codigo'] == '0102')
logo = f"images/{banco['filename']}"
```

## ¿Colaboras?

Este es un proyecto de apoyo abierto a mejoras. Si quieres contribuir, te damos la bienvenida:

- **Iconos de mejor calidad** — versiones más nítidas o con fondo transparente
- **Formato 512×512 px** — tamaño uniforme para apps y web
- **Versiones vectorizadas** — SVG preferido para escalado sin pérdida
- **Ideas y sugerencias** — nuevos campos, alias cortos, normalización de nombres, etc.

Los logos actuales son un punto de partida. Cualquier aporte que mejore la calidad o la consistencia del recurso ayuda a quienes lo usan en sus proyectos.

Si este recurso te resulta útil, **deja una estrella** en el repositorio — ayuda a que más desarrolladores lo encuentren.


---

*27 bancos · códigos bancarios · RIF · logos · uso libre en proyectos de apoyo*
