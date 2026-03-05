        // Getting reference to the lamp pull cord element
        const lampPull = document.getElementById('lampPull');
        // Getting reference to the login form element
        const loginForm = document.getElementById('loginForm');
        // Getting reference to the lamp glow effect element
        const lampGlow = document.getElementById('lampGlow');
        // Getting reference to the lamp shade element
        const lampShade = document.getElementById('lampShade');
        // Getting reference to the body element
        const body = document.body;
        
        // Variable to track if lamp is on or off (starting as off)
        let isOn = false;
        
        // Creating an audio object for click sound effect
        const clickSound = new Audio('data:audio/wav;base64,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');
        
        // Function to toggle the lamp on and off
        function toggleLamp() {
            // Switching the state from on to off or off to on
            isOn = !isOn;
            // Playing the click sound
            clickSound.play();
            
            // Setting data attribute on body for CSS targeting
            body.setAttribute('data-on', isOn);
            
            // If lamp is turned on
            if (isOn) {
                // Adding active class to show login form
                loginForm.classList.add('active');
                // Adding active class to show glow effect
                lampGlow.classList.add('active');
                // Changing lamp shade color to bright (light is on)
                lampShade.style.backgroundColor = '#fff9e6';
                // Changing body background to lighter dark color
                body.style.backgroundColor = '#2a2a2a';
            } else {
                // Removing active class to hide login form
                loginForm.classList.remove('active');
                // Removing active class to hide glow effect
                lampGlow.classList.remove('active');
                // Changing lamp shade back to cream color (light is off)
                lampShade.style.backgroundColor = '#f5f5dc';
                // Changing body background back to original dark color
                body.style.backgroundColor = '#1a1a1a';
            }
        }
        
        // Adding click event listener to the lamp pull cord
        lampPull.addEventListener('click', toggleLamp);
        
        // Adding click event listener to the sign in button (for demo purposes)
        document.querySelector('.sign-in-btn').addEventListener('click', function() {
            // Showing alert when sign in is clicked
            alert('Sign in functionality would go here!');
        });
    