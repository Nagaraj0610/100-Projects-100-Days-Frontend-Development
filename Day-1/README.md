# Classic Calculator with Memory Functions

A sleek, modern calculator built with vanilla HTML5, CSS3, and JavaScript. Features a classic layout with comprehensive memory functions and glassmorphism design.

## 🚀 Features

### Core Functionality
- ✅ **Basic Arithmetic**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- ✅ **Decimal Support**: Handle floating-point calculations
- ✅ **Keyboard Input**: Full keyboard support for all operations
- ✅ **Error Handling**: Division by zero protection
- ✅ **Backspace**: Delete last entered digit
- ✅ **Clear Functions**: Clear All (C) and Clear Entry (CE)

### Memory Functions
- 🧠 **MS (Memory Store)**: Store current display value in memory
- 🧠 **MR (Memory Recall)**: Recall stored memory value to display
- 🧠 **M+ (Memory Add)**: Add current display value to memory
- 🧠 **M- (Memory Subtract)**: Subtract current display value from memory
- 🧠 **MC (Memory Clear)**: Clear memory storage
- 🧠 **Visual Memory Indicator**: Red "M" indicator shows when memory contains a value

### User Experience
- 🎨 **Modern Glassmorphism UI**: Translucent design with backdrop blur effects
- 🌈 **Beautiful Gradient Background**: Purple-blue gradient backdrop
- ✨ **Smooth Animations**: Hover effects and button press animations
- 📱 **Responsive Design**: Optimized for both desktop and mobile devices
- ⌨️ **Full Keyboard Support**: Use keyboard for all calculator operations
- 🎯 **Classic Layout**: Traditional calculator button arrangement

## 🛠️ Tech Stack

- **HTML5**: Clean semantic structure
- **CSS3**: Modern styling with Grid, Flexbox, and advanced visual effects
- **Vanilla JavaScript**: ES6+ class-based architecture
- **Zero Dependencies**: Pure web technologies only

## 📁 Project Structure

```
calculator/
│
├── index.html          # Calculator structure and layout
├── styles.css          # All styling and visual effects
├── script.js           # Calculator logic and functionality
└── README.md          # Documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Download** the three files:
   - `index.html`
   - `styles.css` 
   - `script.js`

2. **Save** all files in the same folder

3. **Open** `index.html` in your web browser

4. **Start calculating!** 🎉

### Quick Setup
```bash
# Create project folder
mkdir classic-calculator
cd classic-calculator

# Save the three files in this folder
# Then open index.html in your browser
```

## 📖 How to Use

### Basic Operations
| Input | Method | Description |
|-------|--------|-------------|
| **Numbers** | Click 0-9 or keyboard | Enter digits |
| **Operations** | Click +, -, ×, ÷ or use +, -, *, / | Mathematical operations |
| **Calculate** | Click = or press Enter | Get result |
| **Decimal** | Click . or press . | Add decimal point |
| **Clear All** | Click C or press Escape | Reset calculator |
| **Clear Entry** | Click CE | Clear current input only |
| **Backspace** | Click ⌫ or press Backspace | Delete last digit |

### Memory Operations
| Button | Keyboard | Function | Description |
|--------|----------|----------|-------------|
| **MS** | - | Memory Store | Save current display to memory |
| **MR** | - | Memory Recall | Display stored memory value |
| **M+** | - | Memory Add | Add current value to memory |
| **M-** | - | Memory Subtract | Subtract current value from memory |
| **MC** | - | Memory Clear | Clear memory (M indicator disappears) |

### Visual Indicators
- **Red "M"** appears in top-left when memory contains a value
- **Button animations** provide visual feedback on interaction
- **Number formatting** with commas for large numbers
- **Scientific notation** for very large or very small numbers

## 🎨 Design Features

### Visual Elements
- **Glassmorphism Effect**: Semi-transparent calculator with backdrop blur
- **Gradient Background**: Dynamic purple-to-blue gradient
- **Color-Coded Buttons**:
  - 🟦 Numbers: Semi-transparent white
  - 🔴 Operators: Red accent color
  - 🟢 Equals: Teal accent color
  - 🟣 Memory: Purple accent color
  - 🟠 Clear/Backspace: Orange accent color

### Layout
- **5×6 Grid**: Classic calculator button arrangement
- **Memory Row**: All memory functions in top row
- **Large Display**: Easy-to-read number display with memory indicator
- **Proper Spacing**: Adequate button spacing for easy interaction

## 🔧 Technical Implementation

### JavaScript Architecture
```javascript
class Calculator {
    constructor()           // Initialize calculator state
    updateDisplay()         // Update display and memory indicator
    inputNumber(num)        // Handle number button presses
    inputOperator(op)       // Handle operator button presses
    calculate()             // Perform calculations
    performCalculation()    // Core arithmetic logic
    inputDecimal()          // Handle decimal point input
    clearAll()              // Clear all (C button)
    clearEntry()            // Clear entry (CE button)
    backspace()             // Remove last digit
    memoryStore()           // MS - Store in memory
    memoryRecall()          // MR - Recall from memory
    memoryAdd()             // M+ - Add to memory
    memorySubtract()        // M- - Subtract from memory
    memoryClear()           // MC - Clear memory
}
```

### Key Features
- **State Management**: Maintains current input, previous input, and operator
- **Memory Management**: Persistent memory storage with visual feedback
- **Error Handling**: Prevents division by zero and handles edge cases
- **Number Formatting**: Automatic formatting for readability

### Browser Compatibility
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🎯 Usage Examples

### Basic Calculation
```
Enter: 15 + 25 =
Result: 40
```

### Memory Operations
```
Enter: 100
Press: MS (stores 100 in memory, M indicator appears)
Enter: 50
Press: M+ (memory now contains 150)
Press: C (clears display but memory remains)
Press: MR (displays 150 from memory)
Press: MC (clears memory, M indicator disappears)
```

### Decimal Calculations
```
Enter: 12.5 × 2.4 =
Result: 30
```

## 📱 Mobile Support

The calculator is fully responsive and touch-friendly:
- **Touch Targets**: Large buttons optimized for finger taps
- **Viewport Scaling**: Automatically adjusts to screen size
- **Portrait/Landscape**: Works in both orientations
- **Gesture Support**: Supports standard touch interactions

## 🔮 Customization Ideas

Want to modify the calculator? Here are some ideas:
- **Color Themes**: Change the gradient background or button colors
- **Sound Effects**: Add click sounds for button presses
- **Additional Functions**: Add percentage, square root, or power functions
- **Themes**: Create light/dark mode toggle
- **Size Options**: Adjust calculator dimensions

## 🤝 Contributing

Feel free to enhance this calculator:
- 🐛 **Bug Fixes**: Report or fix any issues
- 🎨 **UI Improvements**: Enhance the visual design
- ⚡ **Performance**: Optimize code performance
- 📚 **Documentation**: Improve or expand documentation
- ✨ **Features**: Add new calculator functions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by classic calculator designs
- Modern web technologies and best practices
- Glassmorphism design trend
- CSS Grid and Flexbox layout techniques

---

**Built with ❤️ using vanilla web technologies**

*Simple, elegant, and functional - just like a calculator should be* ✨
