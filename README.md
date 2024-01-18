# Userfy - Users Management App 👤

Userfy is a web application designed to help you control users based on the existing users from the API https://jsonplaceholder.typicode.com/users, it allows you to create new users too.

https://userfy-next.vercel.app/users

![Userfy Users](https://cdn.discordapp.com/attachments/1145135177534812231/1195304710379421796/Captura_de_pantalla_2024-01-12_104808.png)
![Userfy Loader](https://cdn.discordapp.com/attachments/1145135177534812231/1195305155130818580/Captura_de_pantalla_2024-01-12_105548.png)
![Userfy Empty Form](https://cdn.discordapp.com/attachments/1145135177534812231/1195304710710767646/Captura_de_pantalla_2024-01-12_104823.png)
![Userfy Fullfilled Form](https://cdn.discordapp.com/attachments/1145135177534812231/1195305359301165106/Captura_de_pantalla_2024-01-12_105329.png)

## Table of Contents

- Features
- Technologies Used
- Testing

### Features

- **Create, Read, Sync:** Easily add, view and sync users.
- **Single Page Application (SPA):** Smooth and seamless user experience with Next.
- **Styling with SASS:** Creating maintainable and modular stylesheets with SASS and BEM method for classes.
- **Feedback to User:** Notification to users with user-friendly toasts using Toastify.
- **HTTP Requests:** Communication with the server using Axios.
- **Testing:** Reliability of the application with unit, component, and integration testing using Vitest and Testing Library.
- **Mocking Service with MSW:** Simulating server requests with the MSW mocking service.

### Technologies Used

- **Next:** A popular JavaScript library for building user interfaces.
- **Toastify:** A library for displaying notifications in a user-friendly manner.
- **Node.js:** A JavaScript runtime for building server-side applications.
- **Axios:** A promise-based HTTP client for making requests to the server.
- **Vitest:** A testing framework for unit, component, and integration testing.
- **Mocking Service:**
  MSW (Mock Service Worker): A library for simulating server requests in testing and development.

## Testing

In this project I used Vitest for unit and component testing.
Here some Sonar metrics:

![Userfy Front coverage](https://cdn.discordapp.com/attachments/1145135177534812231/1156617901139316746/Captura_de_pantalla_2023-09-27_162333.png)
https://sonarcloud.io/summary/overall?id=Alambea_fntstcf-front

![Userfy Front coverage metrics](https://cdn.discordapp.com/attachments/1145135177534812231/1156617900854087691/Captura_de_pantalla_2023-09-27_162259.png)
https://sonarcloud.io/project/activity?from=2024-01-07T20%3A46%3A13%2B0000&graph=coverage&id=Alambea_fntstcf-front

![Userfy Front Lighthouse](https://cdn.discordapp.com/attachments/1145135177534812231/1195302241888911412/Captura_de_pantalla_2024-01-12_104045.png)
