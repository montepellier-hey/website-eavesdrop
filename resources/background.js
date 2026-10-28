/* Shared page background. Include with a plain <script src="resources/background.js"></script> directly after <body>. */
/* Three large, heavily blurred glows that melt into each other, so there is no visible edge or banding. */

document.write(`
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div class="absolute -top-48 left-1/2 h-[34rem] w-[60rem] max-w-none -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[140px]"></div>
        <div class="absolute -bottom-40 -right-40 h-[32rem] w-[40rem] rounded-full bg-moss/40 blur-[140px]"></div>
        <div class="absolute -left-48 top-1/3 h-[28rem] w-[30rem] rounded-full bg-accent/[0.06] blur-[140px]"></div>
    </div>
`);
