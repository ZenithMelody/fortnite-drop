let locations = [];

// Fetch the Fortnite map data
async function fetchMapData() {
  try {
    const response = await fetch("https://fortnite-api.com/v1/map");
    const data = await response.json();

    // Extract POI names
    locations = data.data.pois.map(poi => poi.name);

    // Update UI
    document.getElementById("output").innerText = "Press the button!";
  } catch (error) {
    console.error("Error fetching map data:", error);
    document.getElementById("output").innerText = "Failed to load map data 😢";
  }
}

// Function to get a random drop location
function getDrop() {
  if (locations.length === 0) {
    document.getElementById("output").innerText = "Map data not loaded yet!";
    return;
  }
  const randomIndex = Math.floor(Math.random() * locations.length);
  document.getElementById("output").innerText = locations[randomIndex];
}

// Load map data when the page starts
fetchMapData();
