# Raintor Ltd. Frontend Developer Technical Assessment

This project is a submission for the Frontend Developer role at Raintor Ltd., implementing a responsive developer portfolio homepage based on the provided Figma design. The application is built with Next.js, Tailwind CSS, and includes features like a theme toggle, skeleton loading, and accessibility enhancements.

Live Demo: **https://raintor-task-swart.vercel.app/**

GitHub Repository: **https://github.com/williamrey/raintor-task**

## Project Overview

The project implements the homepage of a developer portfolio as per the Figma design (https://www.figma.com/design/5K0twoVnr0hDHe5EoB5jFi/Portfolio?node-id=73-446&p=f). It includes:

- **Responsive UI**: Pixel-perfect implementation with Tailwind CSS, tested across mobile, tablet, and desktop screens.
<!-- - **Theme Toggle**: Dark/light mode with persistence using `localStorage` and Tailwind’s `dark` class. -->
- **Reusable Components**: Modular `Button`, `Card`, `Navbar`, and components.
- **Skeleton Loading**: Placeholder UI during data loading (simulated for portfolio cards).
- **Accessibility**: ARIA roles, labels, and keyboard navigation support.
- **Modular Architecture**: Organized into `components/`, `contexts/`, and `assets/` directories.

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: `lucide-react` for menu, theme toggle, and other icons
<!-- - **State Management**: React Context API (`ThemeContext`) for theme toggle -->
- **Image Optimization**: Next.js `Image` component
<!-- - **Type Checking**: TypeScript for type safety -->
- **Formatting**: ESLint and Prettier for code consistency
- **Testing**: Jest and React Testing Library (basic unit test for `Button` component)
- **Deployment**: Vercel for hosting

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/raintor-task.git
   cd raintor-task