# Agenda de Vuelos

![Captura de pantalla 2025-04-06 a la(s) 4 52 44 p m](https://github.com/user-attachments/assets/b35bc588-882a-4403-ae61-6b5ba3185fda)
![Captura de pantalla 2025-04-06 a la(s) 4 53 19 p m](https://github.com/user-attachments/assets/8b509003-7732-4efe-92d7-f6630ee865c7)
![Captura de pantalla 2025-04-06 a la(s) 4 53 39 p m](https://github.com/user-attachments/assets/2986c5f6-f4ce-43df-9a4c-813369a8e2db)



Este proyecto es una aplicación móvil que permite consultar información sobre vuelos, incluyendo la posibilidad de buscar vuelos por número de vuelo, ver todos los vuelos con destino a un lugar específico, ver los detalles de cada vuelo, y obtener el estado de los vuelos.

## Características

- **Buscar vuelos por número de vuelo**: Permite buscar un vuelo en específico mediante su número de vuelo.
- **Ver vuelos con destino a un lugar específico**: Muestra todos los vuelos con destino a un lugar determinado.
- **Ver detalles de cada vuelo**: Permite consultar información detallada de cada vuelo, incluyendo horarios y estados.
- **Estado de los vuelos**: Muestra información en tiempo real sobre el estado de los vuelos (por ejemplo, si están retrasados o a tiempo).

## Características Técnicas

- **React Native CLI**: Versión `0.75.2`, utilizada para el desarrollo de aplicaciones móviles nativas.
- **Zustand**: Utilizado para el manejo del estado global de la aplicación de forma sencilla y eficiente.
- **Styled Components**: Para el maquetado y la creación de componentes reutilizables y estilos dinámicos.
- **Tanstack Query y Axios**: Utilizados para el manejo de los endpoints de la API y la gestión de la cache de las solicitudes de red.
- **Babel**: Para el manejo de importaciones de componentes personalizados y la compatibilidad con las últimas características de JavaScript.
- **Arquitectura MVVM**: Modelo-Vista-ViewModel, una arquitectura clara y escalable para la organización de la aplicación.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu-usuario/agenda-de-vuelos.git

### For Android

```bash

Emulador de prubas requiere: Pixel 8 Pro API 34 - Android:14.0 x86_64
yarn install

npm run start
npx react native run-android 
```

### For iOS

```bash
# using npm
Emulador de prubas requiere: iphone 15 - Ios :17.5

yarn install 
npx pod-install ios

npm run start
npx react-native run-ios
```

   
