const CONFIG = {
  // This will be the text that appears in your page's tab header.
  pageTitle: "Hello World!",

  // If left blank, this will default to pageTitle.
  pageHeader: "👋 Hello!",

  // The width of the main content area in pixels.
  mainContentWidth: 600,

  // This is where you define the different sections of your page.
  sections: {
    // Use keys to specify each section's subtitle, and values to specify its content.
    // Font Awesome is implemented! Find icons here: https://fontawesome.com/search?o=r&m=free
    "Thanks for trying Scaffold!": `
    <ul>
      <li>Change the content and style of this page in <code>config.js</code></li>
      <li>Read the instructions in <code>README.md</code> to get your page on the web</li>
    </ul>
    `,
  },

  // This is where you define the fonts you want to use.
  fonts: {
    title: "DM Sans, sans-serif",
    body: "Red Hat Display, sans-serif",
    code: "DM Mono, monospace",

    // Have any other fonts you want to use? Add the URLs here to use them above.
    imports: [
      "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300&display=swap",
      "https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap",
      "https://fonts.googleapis.com/css2?family=DM+Mono&display=swap",
    ],
  },

  // Whether to use Twitter-style emoji. Set to "false" to disable.
  useTwemoji: true,

  // Here you can set the colour scheme for your page. These will be black (#0f0f0f) and white (#f0f0f0) by default.
  colours: {
    background: "#f0f0f0",
    title: "#0f0f0f",
    body: "#0f0f0f",
    accent: "#2e4761",
  },
};
