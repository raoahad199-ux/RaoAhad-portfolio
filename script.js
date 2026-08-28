const clickLink = document.querySelector("#clickLink");
const message = document.querySelector("#message");
const details = document.querySelector("#details");
const copyNumber = document.querySelector("#copyNumber");
const copyStatus = document.querySelector("#copyStatus");
const phoneNumber = "03098082013";

clickLink.addEventListener("click", () => {
    const isOpen = clickLink.getAttribute("aria-expanded") === "true";

    clickLink.setAttribute("aria-expanded", String(!isOpen));
    clickLink.textContent = isOpen ? "Click Me" : "Hide Details";
    message.textContent = isOpen
        ? "Welcome to my portfolio. Click below to see my details."
        : "Here are my personal details.";
    details.hidden = isOpen;
});

copyNumber.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(phoneNumber);
        copyStatus.textContent = "Number copied.";
    } catch {
        copyStatus.textContent = `Call ${phoneNumber}`;
    }
});