/* Shared footer. Include with a plain <script src="resources/footer.js"></script> at the end of <body>. */
/* No background block and no border: the footer fades into the page instead of sitting on it like a bar. */

document.write(`
    <footer class="mt-16 px-6 pb-12 pt-20 text-center text-sm text-mist">
        <div class="mx-auto flex max-w-md flex-col items-center gap-7">
            <div class="flex items-center justify-center gap-6">
                <a href="https://x.com/team_eavesdrop" class="transition duration-300 hover:-translate-y-0.5"><img src="resources/x.png" alt="X" class="h-6 w-6 opacity-80 transition hover:opacity-100"></a>
                <a href="https://tiktok.com/eavesdrop" class="transition duration-300 hover:-translate-y-0.5"><img src="resources/tiktok.png" alt="tikTok" class="h-6 w-6 opacity-80 transition hover:opacity-100"></a>
            </div>

            <p class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <a href="termsAndConditions.html" class="transition hover:text-accent">terms</a>
                <a href="privacy.html" class="transition hover:text-accent">privacy</a>
                <a href="contact.html" class="transition hover:text-accent">contact us</a>
            </p>

            <p>&copy; 2025 eavesdrop. all rights reserved.</p>
        </div>
    </footer>
`);
