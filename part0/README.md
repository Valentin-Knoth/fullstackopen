# part0

## 
```mermaid
sequenceDiagram
    participant Usuario
    participant Navegador
    participant JS
    participant Servidors

    Usuario->>Navegador: Escribe una nota en el campo de texto
    Usuario->>Navegador: Hace clic en "Save"
    Navegador->>JS: Dispara evento submit
    JS->>JS: Previene comportamiento por defecto
    JS->>JS: Construye objeto de nota (contenido, fecha, important)
    JS->>Servidor: POST /new_note con datos en JSON
    Servidor->>Servidor: Guarda la nota (memoria o base de datos)
    Servidor-->>Navegador: Redirige a /notes
    Navegador->>Servidor: GET /notes
    Servidor-->>Navegador: Devuelve HTML actualizado
    Navegador->>Usuario: Muestra la nueva lista de Notas
```
```
sequenceDiagram
participant Usuario
participant Navegador
participant Servidor

    Usuario->>Navegador: Accede a /spa
    Navegador->>Servidor: GET /spa
    Servidor-->>Navegador: HTML con referencia a main.js
    Navegador->>Servidor: GET /main.js
    Servidor-->>Navegador: Código JavaScript
    Navegador->>Servidor: GET /data.json
    Servidor-->>Navegador: JSON con las notas
    Navegador->>Usuario: Renderiza UI con las notas (JS manipula DOM)
```

```mermaid
sequenceDiagram
participant Usuario
participant Navegador
participant JS (main.js)
participant Servidor

    Usuario->>Navegador: Escribe texto en el campo
    Usuario->>Navegador: Hace clic en "Save"
    Navegador->>JS (main.js): Maneja evento click
    JS (main.js)->>JS (main.js): Crea objeto nota (texto + fecha)
    JS (main.js)->>Servidor: POST /new_note con JSON
    Servidor-->>JS (main.js): Respuesta OK
    JS (main.js)->>Navegador: Actualiza la vista con la nueva nota sin recargar
```
