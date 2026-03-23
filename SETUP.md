# Cigar Box Production System

A web-based production management system for cigar box manufacturing, built with Next.js, Tailwind CSS, and Node.js.

## Project Structure

```
cigar-box-production/
├── src/                          # Source code (to be organized)
│   ├── app/                     # Next.js app directory
│   ├── components/              # React components
│   │   ├── order/              # Order input components
│   │   └── planning/           # Planning components
│   ├── api/                    # API routes
│   ├── types/                  # TypeScript types
│   └── utils/                  # Utility functions
├── public/                      # Static assets
├── OrderInputForm.tsx           # Main order input component
├── OrderPlanningComponent.tsx   # Production planning component
├── calculationUtils.ts          # Cutting plan calculations
├── types.ts                     # Type definitions
├── layout.tsx                   # Root layout
├── page.tsx                     # Home page
├── globals.css                  # Global styles
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── postcss.config.js            # PostCSS config
└── next.config.js               # Next.js config
```

## Features

### Phase 1: Order Input & Production Planning

#### Order Input Form
- **Box Type Selection**: Choose from predefined box types
- **Quantity**: Specify number of boxes to produce
- **Order & Delivery Dates**: Track timeline requirements
- **Sheet Type**: Select wood material type

#### Production Planning
- **Automatic Calculations**: System calculates required boards, slats, and pieces
- **3-Phase Planning**: Separate plans for top/bottom, long, and small sheets
- **Cutting Loss Accounting**: 1mm loss per cut automatically included
- **Surface Printing Configuration**: 
  - 8 surfaces per box (Top-Outer, Top-Inner, Bottom-Outer, Bottom-Inner, Long-1, Long-2, Small-1, Small-2)
  - Image upload support (JPG, PNG, PDF)
  - Flexible image reuse across surfaces

## Technology Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Node.js (API routes)
- **Database**: MS SQL Server (planned)
- **Auth**: Basic authentication (planned)

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd cigar-box-production
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open browser
```
http://localhost:3000
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Components Documentation

### OrderInputForm
Collects order specifications:
- Box Type ID
- Quantity
- Order and Delivery Dates
- Sheet Type

### OrderPlanningComponent
Displays production planning:
- Cutting requirements for each sheet type
- Material calculations
- Surface printing configuration
- Design image upload

### Calculation Utilities
- `calculateSheetPlan()` - Calculate plan for single sheet type
- `calculateOrderPlan()` - Calculate complete production plan

## Cutting Plan Calculation

The system uses the following formula to calculate material requirements:

```
Total Pieces Needed = Order Quantity × Pieces per Box

For each sheet type:
- Pieces per Slat = Floor((Board Width - (cuts × 1mm)) / Sheet Width)
- Slats per Board = Floor((Board Height - (cuts × 1mm)) / Sheet Height)
- Pieces per Board = Pieces per Slat × Slats per Board
- Boards Needed = Ceiling(Total Pieces / Pieces per Board)
```

## Database Schema (Planned)

Tables will include:
- `orders` - Order records
- `box_types` - Box type configurations
- `surfaces` - Surface definitions
- `sheet_plans` - Cutting plans
- `users` - User management

## Next Steps

1. Set up MS SQL Server integration
2. Implement API routes for calculations
3. Add user authentication
4. Create database schema
5. Implement image upload functionality
6. Add order history and tracking
7. Create cutting instruction exports

## Contributing

Please follow the existing code style and add TypeScript types for all new code.

## License

Proprietary - Cigar Box Production
