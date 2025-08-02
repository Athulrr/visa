# Visaslots - Schengen Visa Appointment Booking

A modern React web application for booking Schengen Visa appointments with AI-powered instant notifications and auto-booking features.

## Features

- **AI-Powered Booking**: Instant results and notifications
- **Modern UI**: Clean, responsive design matching the exact specifications
- **Form Integration**: Easy visa appointment booking form
- **Real-time Updates**: Social media-style notification system
- **Mobile Responsive**: Works perfectly on all devices

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Adding the Couple's Image

To add the couple's PNG image as shown in the design:

1. Place your PNG image file in the `public` folder
2. Update the `coupleImageSrc` state in `src/App.jsx`:

```jsx
const [coupleImageSrc, setCoupleImageSrc] = useState('/your-image.png')
```

The image should be:
- PNG format with transparency
- High resolution (recommended: 400x500px or larger)
- Shows a happy couple with straw hats and sunglasses
- The man should be holding a map

## Design Specifications

- **Background**: Light cream (#fefefe)
- **Primary Text**: Dark green (#1a3a2e)
- **Accent Color**: Orange (#ff6b35)
- **Secondary Text**: Gray (#666)
- **Form Inputs**: Light gray background (#f9f9f9)

## Project Structure

```
src/
├── components/
│   └── CoupleImage.jsx    # Handles the couple's image
├── App.jsx                 # Main application component
├── App.css                 # Main styles
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- React 18
- Vite
- CSS3
- Modern JavaScript (ES6+)

## License

This project is created for educational and demonstration purposes.
