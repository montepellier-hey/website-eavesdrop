/* Shared top navigation. Include with a plain <script src="resources/nav.js"></script> directly after <body>. */
/* Needs the Tailwind CDN script and resources/tailwind-config.js to be loaded in the <head>. */

const APP_STORE_URL = "https://apps.apple.com/us/iphone/search?term=eavesdrop";
const GOOGLE_PLAY_URL = "https://play.google.com/store/search?q=eavesdrop&c=apps&utm_source=emea_Med";
const LOGO_URL = "https://firebasestorage.googleapis.com/v0/b/eavesdrop-64397.firebasestorage.app/o/htmlImages%2FlogoNoBackground.png?alt=media&token=499b0899-d4f7-452d-acab-b3b29bf3a99d";

document.write(`
    <!-- One soft glow behind the whole page, so header, content and footer blend together -->
    <div class="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(179,225,110,0.14),transparent),radial-gradient(ellipse_60%_40%_at_100%_100%,rgba(54,95,94,0.28),transparent)]"></div>

    <nav class="fixed inset-x-0 top-4 z-50 px-4 text-left">
        <div class="mx-auto max-w-5xl">
            <div class="flex h-14 items-center justify-between rounded-full border border-white/10 bg-ink/50 pl-5 pr-3 shadow-lg shadow-black/20 backdrop-blur-xl">
                <a href="index.html" class="flex items-center">
                    <img src="${LOGO_URL}" alt="eavesdrop logo" class="h-8 w-8">
                </a>

                <div class="hidden items-center gap-5 md:flex">
                    <a href="contact.html" class="text-sm text-accent/80 transition hover:text-accent">contact</a>
                    <a href="${APP_STORE_URL}" class="rounded-full border border-accent/60 px-4 py-1.5 text-sm text-accent transition hover:bg-accent hover:text-ink">app store</a>
                    <a href="${GOOGLE_PLAY_URL}" class="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-ink transition hover:bg-accent/80">google play</a>
                </div>

                <button id="menu-button" type="button" aria-label="menu" aria-expanded="false" aria-controls="mobile-menu" class="rounded-full p-2 text-accent transition hover:bg-white/5 md:hidden">
                    <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                        <path d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>

            <div id="mobile-menu" class="mt-2 hidden rounded-3xl border border-white/10 bg-ink/70 p-5 shadow-lg shadow-black/20 backdrop-blur-xl md:hidden">
                <div class="flex flex-col gap-4">
                    <a href="contact.html" class="text-accent">contact</a>
                    <a href="${APP_STORE_URL}" class="text-accent">app store</a>
                    <a href="${GOOGLE_PLAY_URL}" class="text-accent">google play</a>
                </div>
            </div>
        </div>
    </nav>
`);

/* The nav is written while the page is still loading, so listen on the document instead of the button. */
document.addEventListener("click", (event) => {
    const button = event.target.closest("#menu-button");

    if (!button)
    {
        return;
    }

    const menu = document.getElementById("mobile-menu");
    const is_hidden = menu.classList.toggle("hidden");

    button.setAttribute("aria-expanded", is_hidden ? "false" : "true");
});
