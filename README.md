# Lamp Login

An interactive login page featuring an animated desk lamp. The lamp acts as a light switch — pulling its cord toggles the lamp on/off, which reveals or hides the login form and changes the page's overall lighting mood.

## Features

- **Interactive lamp toggle**: Click the pull cord to turn the lamp on/off
- **Animated glow effect**: A radial gradient glow appears behind the lamp when lit
- **Dynamic background**: Page background darkens/lightens based on lamp state
- **Animated login form**: Form fades and slides into view when the lamp is turned on
- **Sound feedback**: A click sound plays when toggling the lamp
- **Responsive design**: Layout stacks vertically on mobile/smaller screens (≤768px)

## File Structure

```
lamp-login/
├── lamp-login.html   # Page structure and markup
├── lamp-login.css    # Styling, layout, animations, and responsive rules
└── lamp-login.js     # Lamp toggle logic and event handling
```

## How It Works

### HTML (`lamp-login.html`)
Defines two main sections inside `.content-wrapper`:
1. **Lamp illustration** (`.lamp-container`): built from stacked divs representing the glow, shade, string, pull cord, pole, and base.
2. **Login form** (`.login-form`): contains a heading, username/password fields, and a sign-in button. Hidden by default until the lamp is switched on.

### CSS (`lamp-login.css`)
- Uses flexbox to center and arrange the lamp and form side by side (stacked on mobile).
- `.lamp-glow` uses a radial gradient and `opacity` transition to simulate light.
- `.login-form` starts hidden (`opacity: 0`, shifted up) and becomes visible via the `.active` class.
- Smooth `transition` properties on `body`, `.lamp-shade`, `.lamp-glow`, and `.login-form` create the fade/glow animations.
- Gold accent color (`#d4af37`) ties the title and sign-in button to the lamp's warm light theme.

### JavaScript (`lamp-login.js`)
- Tracks lamp state with the `isOn` boolean.
- `toggleLamp()`:
  - Plays a short click sound (embedded as a base64 data URI, no external file needed).
  - Toggles a `data-on` attribute on `<body>`.
  - When **on**: shows the login form, activates the glow, brightens the lamp shade, and lightens the page background.
  - When **off**: reverses all of the above.
- Clicking the **Sign In** button currently shows a placeholder `alert()` — intended as a hook for real authentication logic.

## Usage

1. Place all three files (`lamp-login.html`, `lamp-login.css`, `lamp-login.js`) in the same directory.
2. Open `lamp-login.html` in a web browser.
3. Click the small tan circle (pull cord) hanging below the lamp shade to turn the lamp on.
4. The login form will fade in — enter a username/password and click **Sign In**.
5. Click the pull cord again to turn the lamp off and hide the form.

## Customization Ideas

- Replace the `alert()` in `lamp-login.js` with a real authentication request (e.g., `fetch` to a backend API).
- Adjust the glow color/size by editing the `radial-gradient` in `.lamp-glow`.
- Change the gold accent color (`#d4af37`) throughout the CSS to match a different brand palette.
- Swap the embedded click sound for a custom audio file by changing the `Audio()` source in `lamp-login.js`.
- Add form validation (e.g., required fields, password strength checks) before the sign-in handler fires.

## Browser Compatibility

Uses standard CSS (flexbox, `backdrop-filter`, CSS transitions) and vanilla JavaScript (`Audio`, DOM APIs, `classList`). Works in all modern browsers (Chrome, Firefox, Safari, Edge). Note: `backdrop-filter` on `.login-form` may require a `-webkit-` prefix or may not render in older browser versions, in which case the form will still display but without the blur effect.

## License

No license specified — add one if you plan to distribute or open-source this project.
