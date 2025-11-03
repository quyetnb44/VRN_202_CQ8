# Vietnam History App - From Bao Cấp to Đổi Mới

A comprehensive React application showcasing Vietnam's historical journey from the subsidized economy period to the modern reform era.

## Features

- **Interactive Timeline**: Navigate through key historical periods (1954-2020)
- **Rich Content**: Detailed sections on Bao Cấp period, Đổi Mới achievements, and national assessments
- **Data Visualization**: GDP growth charts and FDI statistics using Recharts
- **Smooth Animations**: Framer Motion transitions between sections
- **Interactive Quizzes**: Test knowledge with multiple-choice questions
- **Document Library**: Access to historical documents and resources
- **Responsive Design**: Modern UI with Tailwind CSS and Ant Design

## Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Ant Design** - UI component library
- **React Router DOM** - Client-side routing
- **Recharts** - Data visualization
- **Framer Motion** - Animation library

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx      # Main layout with sidebar
│   └── Quiz.jsx        # Interactive quiz component
├── pages/
│   ├── BaoCap.jsx      # Subsidized period (1975-1986)
│   ├── DoiMoi.jsx      # Reform achievements (1986-present)
│   ├── NhanDinh.jsx    # National assessment
│   ├── Timeline.jsx    # Historical timeline
│   └── TuLieu.jsx      # Document resources
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## Sections

### 1. Thời kì Bao cấp (Subsidized Period)
- Characteristics of the centrally planned economy
- Challenges and difficulties faced
- Historical images and context

### 2. Thành tựu Đổi mới (Reform Achievements)
- Economic growth statistics and charts
- Political and social developments
- International integration milestones

### 3. Nhận định (Assessment)
- Official government assessment
- National capabilities and potential
- International standing and reputation

### 4. Timeline
- Interactive horizontal timeline (1954-2020)
- Key historical events with hover details
- Visual representation of Vietnam's journey

### 5. Tư liệu (Resources)
- Historical documents and materials
- Educational resources
- Usage guidelines

## Design System

- **Primary Color**: Red (#B71C1C) - Represents Vietnam's national identity
- **Accent Color**: Gold (#FFD700) - Highlights active states and achievements
- **Typography**: Inter and Roboto fonts for modern readability
- **Layout**: Two-column design with fixed sidebar navigation

## Educational Features

- Interactive quizzes at the end of each section
- Hover tooltips for additional context
- Smooth page transitions for better UX
- Responsive design for all devices

## Development

To customize or extend the application:

1. Add new pages in `src/pages/`
2. Update navigation in `src/components/Layout.jsx`
3. Add routes in `src/App.jsx`
4. Customize styling in `tailwind.config.js`

## License

Educational use only. All historical content and data are for learning purposes.
