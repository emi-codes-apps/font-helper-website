document.addEventListener("DOMContentLoaded", () => {
  const yearNodes = document.querySelectorAll("[data-year]");
  yearNodes.forEach(n => n.textContent = new Date().getFullYear());

  const form = document.querySelector("#issue-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `[Font Helper] ${data.get("type")}: ${data.get("summary") || "Issue report"}`;
    const body = [
      "Font Helper issue report",
      "",
      `Issue type: ${data.get("type")}`,
      `Summary: ${data.get("summary")}`,
      `Browser / environment: ${data.get("environment")}`,
      "",
      "Steps to reproduce:",
      data.get("steps"),
      "",
      "Expected result:",
      data.get("expected"),
      "",
      "Actual result:",
      data.get("actual"),
      "",
      "Additional notes:",
      data.get("notes"),
      "",
      "Please do not include sensitive document content unless it is necessary to diagnose the issue."
    ].join("\n");

    window.location.href =
      "mailto:emi.codes.apps@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  });
});
