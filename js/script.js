// Manually enter your Fortnite POIs here:
let locations = [
  "The Hive",
  "Swarmy Stash",
  "O.X.R HQ",
  "Ranger's Ruin",
  "First Order Base",
  "Resistance Base",
  "Supernova Academy",
  "Shiny Shafts",
  "Outlaw Oasis",
  "Foxy Floodgate",
  "Utopia City",
  "Shining Span",
  "Canyon Crossing",
  "Demon's Debris",
  "Shogun's Solitude",
  "Kappa Kappa Factory",
  "Outpost Enclave"
];

// Function to get a random drop location
function getDrop() {
  if (locations.length === 0) {
    document.getElementById("output").innerText = "No POIs available!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * locations.length);
  document.getElementById("output").innerText = locations[randomIndex];
}

// Initialize UI
document.getElementById("output").innerText = "Press the button!";
