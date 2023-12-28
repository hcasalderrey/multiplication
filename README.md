# Aplicación de Node.js con TypeScript

- Descripción: se realiza un proyecto para de una aplicación en consola, para ver y guardar el resultado de las tablas de multiplicar
- Se realizó con Node y TypeScript con CleanArchitecture y aplicando principios SOLID.

## para inicializar el proyecto

  - npm install
  
 - npm run build \n
  *al ser una aplicación de consola, se puede controlar desde los argumentos para poder dar el resultado esperado con ciertos argumentos que pueden acompañar los tres instrucciones para inicializar.*
 - npm start \n
 - npm run dev o npm run dev:nodemon \n
  
 > -b : base \n
 > -s : showTable       (Optional default false) \n
 > -l : limit           (Optional default 10) \n 
 > -n : fileName        (Optional default table) \n
 > -d : fileDestination (Optional default output/) \n
 > node -b 7 -l 15 -s -n "Tabla del 7" -d output/folder1 \n
