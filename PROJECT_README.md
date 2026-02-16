# Sales Analytics Dashboard

This project is a Next.js 15 + TypeScript dashboard demonstrating an atomic component structure and interactive charts using Recharts. It includes mocked sales data for 2022, 2023, and 2024.

## Features

- Atomic component structure (atoms, molecules, organisms)
- Bar, Line, and Pie charts (Recharts)
- Custom filter input to apply a sales threshold
- Dashboard page with chart components

## Getting started

1. Install dependencies

   npm install

2. Run the development server

   npm run dev

3. Open http://localhost:3000 in your browser

## Project structure

- app/: Next.js app routes and pages
- src/components/: Atomic components organized in `atoms`, `molecules`, `organisms`
- src/data/: Mock sales data and helper functions

## Enhancements (Suggestions)

- Custom Filter Input: let users set their own sales threshold
- API Integration: fetch real data from an API instead of mock data
- Multiple Chart Types: add buttons to switch between bar, line, or pie charts (already included)

## Notes

- If `npm install` fails on Windows due to execution policy, run PowerShell as Administrator and execute `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` or use a different shell (Command Prompt).

## License

MIT
