document.addEventListener("DOMContentLoaded", () => {
  let typed = "";

  document.addEventListener("keydown", (e) => {
    // Ignore special keys like Shift, Alt, etc.
    if (e.key.length === 1) {
      typed += e.key.toLowerCase();

      // Keep only the last 20 characters to avoid growing indefinitely
      typed = typed.slice(-20);

      // Check for secret code
      if (typed.includes("wadsbasement")) {
        openSecretPopup();
        typed = ""; // Reset after triggering
      }
    }
  });

  function openSecretPopup() {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    // Create popup box
    const popup = document.createElement("div");
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "10px";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
    popup.style.width = "80%";
    popup.style.height = "80%";
    popup.style.position = "relative";

    // Create iframe
    const iframe = document.createElement("iframe");
    iframe.src = "/lolol.html";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "6px";

    // Create close button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "10px";
    closeBtn.style.right = "10px";
    closeBtn.style.background = "#ff4d4d";
    closeBtn.style.color = "#fff";
    closeBtn.style.border = "none";
    closeBtn.style.borderRadius = "4px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.fontSize = "16px";
    closeBtn.style.padding = "4px 8px";

    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    popup.appendChild(closeBtn);
    popup.appendChild(iframe);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
  }
});
