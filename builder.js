const MAIN = document.getElementsByTagName("main")[0];

const addFonts = (urls = []) => {
  urls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = url;
    document.head.appendChild(link);
  });
};

addFonts(CONFIG.fonts.imports);

document.documentElement.style.setProperty("--title-font", CONFIG.fonts.title);
document.documentElement.style.setProperty("--body-font", CONFIG.fonts.body);
document.documentElement.style.setProperty("--code-font", CONFIG.fonts.code);

document.title = CONFIG.pageTitle;

document.getElementById("main-header").innerHTML =
  CONFIG.pageHeader || CONFIG.pageTitle;

MAIN.style.width = `${CONFIG.mainContentWidth}px`;

const toKebabCase = (str = "") => {
  const words = str.split(" ");
  const kebabCaseArr = words.map((word) => word.toLowerCase());
  return kebabCaseArr.join("-");
};

for (const [key, value] of Object.entries(CONFIG.sections)) {
  var section = document.createElement("div");
  section.classList.add("section");
  section.id = toKebabCase(key);

  var sectionSubtitle = document.createElement("h2");
  sectionSubtitle.innerHTML = key;

  var sectionContent = document.createElement("p");
  sectionContent.innerHTML = value;

  section.appendChild(sectionSubtitle);
  section.appendChild(sectionContent);

  MAIN.appendChild(section);
}

// Apply colours.
document.documentElement.style.setProperty(
  "--title-colour",
  CONFIG.colours.title
);
document.documentElement.style.setProperty(
  "--body-colour",
  CONFIG.colours.body
);
document.documentElement.style.setProperty(
  "--accent-colour",
  CONFIG.colours.accent
);

// Use twemoji if enabled.
window.onload = function () {
  if (CONFIG.useTwemoji)
    twemoji.parse(document.body, { folder: "svg", ext: ".svg" });
};
