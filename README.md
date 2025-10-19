# Beer Browser

A simple Next.js application created for the purpose of hosting my tasting notes for Beer 1, a course offered at George Brown College. 

The notes created are my own, and reflect my tastings at the time the beers were opened. Most importantly, all images, metadata and all are hosted on this website with Vercel

The website has been styled using Tailwind

## Features

- Click on left/right arrow buttons to navigate through the beers.
- Background color changes according to the SRM value of the beer.
- Displays detailed information about each beer, including:
  - Beer Name
  - Brewery
  - Ingredients
  - ABV (Alcohol by Volume)
  - SRM (Standard Reference Method)
  - IBU (International Bitterness Units)
  - Variety (e.g., Lager, Weissbier)
  - Observations
  - Aroma
  - Taste
  - Image 

## Project Structure

```
beer-browser
├── src
│   ├── pages
│   │   └── index.tsx
│   ├── components
│   │   ├── BeerCard.tsx
│   │   └── ArrowControls.tsx
│   ├── styles
│   │   └── globals.css
│   ├── data
│   │   └── beers.json
│   └── utils
│       └── srmColor.ts
├── public
│   └── images
│       └── (beer images)
├── tailwind.config.js
├── package.json
├── README.md
└── next.config.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd beer-browser
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

This website is a snapshot on my submission for this course, to maintain academic integrity, no new commits should be indicated past the submission deadline. 

All work has been made by Ryan Matte for the purposes of completing the assignment for Beer 1
