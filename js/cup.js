// This function toggles the display of the rules
function showRules() {
  // x is the rules element
  let x = document.getElementById("rules");
  // y is the close button
  let y = document.getElementById("close-button")
  // If the rules block is not visible, set it to visible. Else set it to not visible
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}