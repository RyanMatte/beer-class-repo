# Beer Browser

A simple Next.js application that allows users to browse through different beers by swiping left or right on mobile devices or by clicking on arrow buttons. The background color of the application changes based on the SRM (Standard Reference Method) value of the currently displayed beer, enhancing the visual experience.

## Features

- Swipe left or right to cycle through different beers.
- Click on left/right arrow buttons to navigate through the beers.
- Background color changes according to the SRM value of the beer.
- Displays detailed information about each beer, including:
  - Beer Name
  - ABV (Alcohol by Volume)
  - SRM (Standard Reference Method)
  - IBUY (International Bitterness Units)
  - Variety (e.g., Lager, Weissbier)
  - Observe
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

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.