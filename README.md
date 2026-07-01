# Restaurant Dashboard UI

This project is a Restaurant Dashboard UI built using **React**, **TypeScript**, **Vite**, and **Material UI (MUI)**. The main goal of this project was to recreate the given UI design while following the **Atomic Design** architecture to keep the code reusable and well organized.

---

## Technologies Used

- React
- TypeScript
- Vite
- Material UI (MUI)

---

## Project Structure

The project follows the Atomic Design pattern.

```
src
│
├── components
│   ├── atoms
│   ├── molecules
│   ├── organisms
│   └── templates
│
├── data
├── layouts
├── pages
├── services
├── themes
├── utils
```

- **Atoms** – Small reusable UI components like Button, Avatar, Title, Description and Input.
- **Molecules** – Combination of atoms such as SearchBar, NavigationItem and RestaurantAddress.
- **Organisms** – Complete sections like Sidebar, Navbar, Restaurant Profile, Food Menu and Offer Panel.
- **Template** – Combines all organisms to build the complete dashboard layout.
- **Pages** – Renders the dashboard template.

---

## What I Implemented

- Created the complete dashboard layout using Material UI.
- Built reusable components following the Atomic Design approach.
- Added a responsive sidebar and top navigation bar.
- Created reusable food cards and offer cards.
- Used mock data for restaurant details, menu items and offers.
- Applied Material UI styling using reusable components.

---

## How to Run

Clone the repository

```bash
git clone <repository-url>
```

Go to the project folder

```bash
cd restaurant-dashboard-ui
```

Install dependencies

```bash
npm install
```

Install Material UI

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Start the development server

```bash
npm run dev
```

Open the application in your browser


http://localhost:5173
```




