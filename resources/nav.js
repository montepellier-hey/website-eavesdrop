/* Shared top of the page. Include with a plain <script src="resources/nav.js"></script> directly after <body>. */
/* No bar, no border, no glass: just the logo, loose on the page. It scrolls away with the content. */
/* Needs the Tailwind CDN script and resources/tailwind-config.js to be loaded in the <head>. */

const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/eavesdrop-64397.firebasestorage.app/o/htmlImages%2FlogoNoBackground.png?alt=media&token=499b0899-d4f7-452d-acab-b3b29bf3a99d";

document.write(`
    <a href="index.html" class="absolute left-6 top-6 z-10 block sm:left-10 sm:top-8">
        <img src="${LOGO_URL}" alt="eavesdrop logo" class="h-10 w-10 transition duration-300 hover:scale-105">
    </a>
`);

/* The background is shared, so every page that has the logo gets it too. */
document.write('<script src="resources/background.js"></' + 'script>');
