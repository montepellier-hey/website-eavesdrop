/* Shared page background. Loaded by resources/nav.js, and directly by pages that have no nav. */
/* One calm glow at the top, in a cool emerald (not lime, that turned muddy on the dark teal), fading out in many small steps so there is no visible edge or banding. */
/* Under it, a slow vertical shift from slightly lighter at the top to slightly darker at the bottom. */

document.write(`
    <div class="pointer-events-none fixed inset-0 -z-10" aria-hidden="true" style="background: radial-gradient(ellipse 75% 50% at 50% 0%, rgba(52, 211, 153, 0.10) 0%, rgba(52, 211, 153, 0.075) 18%, rgba(52, 211, 153, 0.05) 36%, rgba(52, 211, 153, 0.028) 54%, rgba(52, 211, 153, 0.01) 74%, rgba(52, 211, 153, 0) 100%), linear-gradient(to bottom, #03302d 0%, #012222 55%, #011a1a 100%);"></div>
`);
