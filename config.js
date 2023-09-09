const CONFIG = {
  // This will be the text that appears in your page's tab header.
  pageTitle: "Why are toasters are the best invention of all time?",

  // If left blank, this will default to pageTitle.
  pageHeader: "<i class='fa-regular fa-circle-question'></i> Why are toasters are the best?",

  // The width of the main content area in pixels.
  mainContentWidth: 800,

  // This is where you define the different sections of your page.
  sections: {
    // Use keys to specify each section's subtitle, and values to specify its content.
    // Font Awesome is implemented! Find icons here: https://fontawesome.com/search?o=r&m=free
    "✨ Toasters are simply amazing!": `
    Let me tell you why. First of all, they are a marvel of modern technology.
    The way they transform a simple slice of bread into a warm, crispy delight is nothing short of magical.
    `,

    "But wait, there's more!": `
    Toasters come in all shapes and sizes. From the classic two-slot toaster to the fancy four-slot ones,
    there's a toaster out there for everyone. And let's not forget about the toaster ovens, which can do
    so much more than just toast.<br>
    Did you know that toasters are also versatile? You can use them to toast:
    <ul>
     <li>Bagels</li>
     <li>English muffins</li>
     <li>Waffles</li>
     <li>And so, so, so much more!</li>
    </ul>
    Some toasters even have special settings to accommodate different types of bread. Talk
    about convenience.
    `,

    "What else?": `
    Let's not forget the satisfying sound of a toaster in action. The satisfying "pop" when your toast is
    ready is music to the ears. It's a small moment of joy in the morning, signaling that a delicious
    breakfast is just moments away.
    `,

    "Conclusion": `
    In conclusion, toasters are truly a remarkable invention. They combine technology, versatility, and
    design to bring us the simple pleasure of perfectly toasted bread. So next time you enjoy a slice of
    warm, golden toast, take a moment to appreciate the humble toaster that made it possible.  
    `,
  },

  // This is where you define the fonts you want to use.
  fonts: {
    title: "Open Sans, sans-serif",
    body: "DM Sans, sans-serif",

    // Have any other fonts you want to use? Add the URLs here to use them above.
    imports: [
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap",
    ],
  },

  useTwemoji: true,

  colours: {
    background: "#f0f0f0",
    title: "orange",
    body: "#0f0f0f",
  },
};
