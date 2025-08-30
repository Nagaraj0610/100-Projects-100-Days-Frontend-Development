# 🌍 World Clock - Digital Clock with Multiple Timezones

A modern, responsive digital clock that displays multiple timezones simultaneously. Part of the **100 Days Frontend Development Challenge** - Day 2 project focusing on JavaScript fundamentals and DOM manipulation.

## ✨ Features

- 🕐 **Dual Time Format**: Switch between 12-hour and 24-hour formats
- 🌏 **Multiple Timezones**: Support for 10+ major world timezones including India
- ➕ **Dynamic Management**: Add and remove timezone clocks on the fly
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern Dark Theme**: Beautiful gradient background with glassmorphism effects
- 🔄 **Real-time Updates**: Clocks update every second automatically
- 💫 **Interactive Animations**: Smooth hover effects and transitions
- 📍 **Local Timezone Indicator**: Special indicator for your current timezone

## 🚀 Quick Start

### 1. Download the Project
```bash
git clone <your-repo-url>
cd world-clock
```

### 2. File Structure
Make sure you have these files in the same folder:
```
world-clock/
├── index.html
├── styles.css
├── script.js
└── README.md
```

### 3. Run the Project
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → "Open with" → Your preferred browser
- Or use a local server (Live Server extension in VS Code)

That's it! No installation or build process required. 🎉

## 🎮 How to Use

### Adding a Timezone
1. Click on the dropdown menu labeled "Select Timezone"
2. Choose any timezone from the list
3. Click the "Add Clock" button
4. The new clock will appear in the grid

### Removing a Timezone
- Click the red "×" button in the top-right corner of any clock card

### Switching Time Format
- Click the "12 Hour Format" / "24 Hour Format" button to toggle between formats

### Available Timezones
- 🇺🇸 New York (EST/EDT)
- 🇺🇸 Los Angeles (PST/PDT)
- 🇬🇧 London (GMT/BST)
- 🇫🇷 Paris (CET/CEST)
- 🇯🇵 Tokyo (JST)
- 🇨🇳 Shanghai (CST)
- 🇮🇳 India (IST)
- 🇦🇺 Sydney (AEST/AEDT)
- 🇦🇪 Dubai (GST)
- 🇧🇷 São Paulo (BRT)

## 🛠️ Technologies Used

| Technology | Purpose | Learning Focus |
|------------|---------|----------------|
| **HTML5** | Structure & Semantic markup | DOM understanding |
| **CSS3** | Styling, animations & responsive design | Modern CSS techniques |
| **JavaScript (ES6+)** | Logic, interactivity & real-time updates | Core JS fundamentals |

## 📚 JavaScript Concepts Demonstrated

This project showcases several important JavaScript fundamentals:

- ✅ **Classes and OOP**: Modern JavaScript class syntax
- ✅ **DOM Manipulation**: Creating, removing, and updating elements
- ✅ **Event Handling**: Button clicks and user interactions
- ✅ **Date/Time API**: Working with `Date` object and `Intl.DateTimeFormat`
- ✅ **Set Data Structure**: Managing unique timezone collections
- ✅ **Intervals**: Real-time updates with `setInterval`
- ✅ **Error Handling**: Try-catch blocks for robust code
- ✅ **Template Literals**: Dynamic HTML generation
- ✅ **Arrow Functions**: Modern function syntax
- ✅ **Local Storage Concepts**: Data persistence principles

## 🎨 Design Features

- **Modern Dark Theme**: Gradient backgrounds with cyan accents
- **Glassmorphism Effects**: Blurred backgrounds and transparency
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: CSS Grid layout that adapts to screen size
- **Interactive Elements**: Hover effects and visual feedback
- **Typography**: Clean, readable fonts with proper hierarchy

## 📱 Browser Compatibility

Works on all modern browsers:
- ✅ Chrome 60+
- ✅ Firefox 60+
- ✅ Safari 12+
- ✅ Edge 79+

## 🔧 Customization

### Adding New Timezones
Edit the `timezoneSelect` options in `index.html`:
```html
<option value="Your/Timezone">Your City Name</option>
```

### Changing Colors
Modify the CSS variables in `styles.css`:
```css
/* Change the main accent color */
background: linear-gradient(45deg, #64ffda, #your-color);
```

### Adjusting Update Frequency
Change the interval in `script.js`:
```javascript
// Update every 500ms instead of 1000ms for smoother updates
setInterval(() => {
    this.updateAllClocks();
}, 500);
```

## 🐛 Troubleshooting

### Clock Not Updating?
- Check if JavaScript is enabled in your browser
- Open browser console (F12) to see any error messages

### Timezone Not Available?
- Ensure the timezone name follows the IANA format (e.g., "America/New_York")
- Check the [full list of IANA timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

### Styles Not Loading?
- Make sure all files (`index.html`, `styles.css`, `script.js`) are in the same folder
- Check that file names match exactly (case-sensitive)

## 🎯 Learning Objectives

This project helps you practice:

1. **HTML Structure**: Semantic markup and proper document structure
2. **CSS Layout**: Grid, Flexbox, and responsive design
3. **JavaScript Fundamentals**: Classes, DOM manipulation, and event handling
4. **Time Management**: Working with dates, timezones, and intervals
5. **User Experience**: Interactive design and smooth animations
6. **Code Organization**: Separating HTML, CSS, and JavaScript

## 🚀 Next Steps

Want to enhance this project? Try adding:

- 🌍 **World Map Integration**: Show clocks on an interactive map
- 💾 **Local Storage**: Remember user's selected timezones
- 🔔 **Alarms**: Set alerts for specific times in different zones
- 📊 **Time Zone Converter**: Convert times between zones
- 🎵 **Sound Effects**: Add ticking sounds or chimes
- 🌓 **Theme Switcher**: Light/dark mode toggle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Found a bug or want to add a feature? Contributions are welcome! 

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the troubleshooting section above
- Review the code comments for detailed explanations

---

**Happy Coding! 🎉** 

*This project is part of the 100 Days Frontend Development Challenge. Day 2: JavaScript Fundamentals & DOM Mastery.*
