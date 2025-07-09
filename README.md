# Rontardio Web

0xB5d3541EA8aa7E4Ad8Bb9A9764D36E48ff27e5d4

## Tech Stack

- **React 19** (with TypeScript)
- **Vite** (development/build tool)
- **TanStack Router** (file-based routing)
- **TailwindCSS** (utility-first CSS)
- **Biome** (code formatter & linter)
- **ESLint** (additional linting)

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **pnpm** (preferred package manager)

### Install pnpm (if you don't have it)

```bash
npm install -g pnpm
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development server

```bash
pnpm dev
```

- The app will be available at `http://localhost:5173` (default Vite port).

### 4. Build for production

```bash
pnpm build
```

### 5. Preview the production build

```bash
pnpm preview
```

## Project Structure

```
src/
  components/      # React components
  routes/          # File-based routes (TanStack Router)
  index.css        # TailwindCSS import
  main.tsx         # App entry point
public/
  images/          # Static images (favicon, hero, etc.)
```

## Linting & Formatting

- **Biome** is used for formatting and linting. To auto-format and lint the code:
  ```bash
  pnpm format
  ```
- **ESLint** is also configured for React/TypeScript best practices:
  ```bash
  pnpm lint
  ```

## Notes

- TailwindCSS is configured via Vite plugin and does not require a separate `tailwind.config.js` unless you want to customize the default settings.
- Routing is handled by TanStack Router using the `src/routes/` directory.

