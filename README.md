# Aplicación de Node.js con TypeScript

- Descripción: se realiza un proyecto para de una aplicación en consola, para ver y guardar el resultado de las tablas de multiplicar
- Se realizó con Node y TypeScript con CleanArchitecture y aplicando principios SOLID.

## para inicializar el proyecto
 - npm run build
  *al ser una aplicación de consola, se puede controlar desde los argumentos para poder dar el resultado esperado con ciertos argumentos que pueden acompañar los tres instrucciones para inicializar.*
 - npm start
 - npm run dev o npm run dev:nodemon
  
 > -b : base
 > -s : showTable       (Optional default false)
 > -l : limit           (Optional default 10)
 > -n : fileName        (Optional default table)
 > -d : fileDestination (Optional default output/)
 > node -b 7 -l 15 -s -n "Tabla del 7" -d output/folder1
