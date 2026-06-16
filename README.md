# Blossom Her 🌸

**Youth Sexual & Reproductive Health Information Platform for Zambia**

## Overview

Blossom Her is a comprehensive, youth-friendly web application providing trusted sexual and reproductive health (SRH) information for Zambian adolescents. The platform is built with accessibility, privacy, and ease-of-use as core principles.

## Features

### 📚 **Learn Section**
- Comprehensive information on puberty and body changes (for girls and boys)
- HIV prevention using the ABCD method
- When to seek professional health advice

### 🧮 **HIV Risk Calculator**
- Personalized risk assessment based on lifestyle factors
- Privacy-first design (data stays on device)
- Tailored recommendations for each risk level

### 🏥 **Clinic Finder**
- Locate youth-friendly clinics across all 8 Zambian provinces
- Filter by location
- View services and operating status
- Free, confidential services for young people

### 🎯 **Myth Buster Game**
- Interactive quiz on HIV, contraception, and sexual health
- Score tracking (on device only)
- Evidence-based answers

### 💬 **Anonymous Questions**
- Submit health questions confidentially
- Browse frequently asked questions
- Get answers from health experts

### 👥 **Peer Educator Connection**
- Chat with trained peer educators via WhatsApp
- Confidential and non-judgmental support
- Available during business hours

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Storage**: LocalStorage (for anonymous questions, scores)
- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG AA compliant, ARIA labels, semantic HTML

## File Structure

```
blossom-her/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling (mobile-first)
├── app.js              # All JavaScript functionality
├── data.js             # Clinic data, myths, FAQs
├── .gitignore          # Git configuration
└── README.md           # This file
```

## Key Fixes & Improvements

### 🐛 **Bug Fixes**
- ✅ Completed missing clinic HTML
- ✅ Fixed mobile navigation toggle
- ✅ Added form validation
- ✅ Resolved event handler conflicts

### ✨ **New Features**
- ✅ Anonymous question submission
- ✅ Myth buster game with scoring
- ✅ Expandable FAQ accordion
- ✅ Province-based clinic filtering
- ✅ Peer educator modal with WhatsApp integration
- ✅ Keyboard navigation support

### 🎨 **Styling Improvements**
- ✅ Mobile-first responsive design
- ✅ Better visual hierarchy
- ✅ Improved color contrast (WCAG AA)
- ✅ Smooth animations and transitions
- ✅ Optimized typography

### ♿ **Accessibility**
- ✅ ARIA labels and roles
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ Semantic HTML structure
- ✅ Screen reader friendly
- ✅ Color-blind friendly palette

### 🔧 **Code Quality**
- ✅ Separated CSS and JavaScript
- ✅ Modular function architecture
- ✅ DRY principles applied
- ✅ Clear code comments
- ✅ No external dependencies (vanilla JS)

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Phillip-design-star/blossom-her.git
cd blossom-her
```

2. Open `index.html` in a web browser:
```bash
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux
```

Or use a simple HTTP server:
```bash
python -m http.server 8000
# Then visit http://localhost:8000
```

## Privacy & Data

- **No data collection**: All information stays on your device
- **Anonymous questions**: Stored locally in browser storage
- **No tracking**: No analytics or external scripts
- **Secure**: HTTPS recommended for deployment

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages

1. Push to GitHub
2. Go to Settings > Pages
3. Select `main` branch as source
4. Site will be available at `https://Phillip-design-star.github.io/blossom-her`

### Vercel

1. Connect your GitHub repo
2. Vercel auto-deploys on push
3. Get instant global CDN

## Data Sources

- Zambia Demographic and Health Survey 2024
- WHO HIV Prevention Guidelines
- Zambian Ministry of Health Standards
- International Planned Parenthood Federation

## Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## Issues & Support

Found a bug or have a suggestion?
- Open an issue on GitHub
- Describe the problem clearly
- Include steps to reproduce
- Specify your browser and device

## Emergency Resources

- **Sexual Abuse/Assault**: Call 211 (toll-free, Zambia)
- **HIV Emergency (PEP)**: Visit any clinic within 72 hours
- **Mental Health Crisis**: Text 211 or call local emergency

## License

This project is open-source and available under the MIT License.

## Disclaimer

This platform provides educational information only. It is not a substitute for professional medical advice. Always consult a qualified health professional for personal medical concerns.

## Team

- **Developer**: Phillip Design Star
- **Design**: Youth-centered, accessibility-first
- **Mission**: Empower Zambian youth with accurate SRH information

---

**Made with ❤️ for the health and wellbeing of Zambian youth**

For questions or feedback, please reach out or open an issue on GitHub.
