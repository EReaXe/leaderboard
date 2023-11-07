// Sample leaderboard data
let leaderboardData = [
  { name: "Ali K.", score: 6.5 },
  { name: "Beof Karaca", score: 4.5 },
  { name: "Erkan Erkanson", score: 6.5 },
  { name: "Etli Pilav", score: 4.5 },
  { name: "Faruk", score: 6.5 },
  { name: "G. Ahmet M. P.", score: 7 },
  { name: "LunarLords", score: 6 },
  { name: "Melih Dolarım", score: 6.5 },
  { name: "Mimar Sinan", score: 7 },
  { name: "Mustafa Rock", score: 6.5 },
];

// Function to populate the leaderboard table
function populateLeaderboard() {
  leaderboardData.sort((a, b) => b.score - a.score); // Sort data by score in descending order
  const leaderboard = document.getElementById("leaderboard");
  const tbody = leaderboard.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Clear the existing rows

  leaderboardData.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${
      entry.score
    }</td>`;
    tbody.appendChild(row);
  });
}

// Function to update the leaderboard when a user's score changes
function updateLeaderboard(name, newScore) {
  const userIndex = leaderboardData.findIndex((entry) => entry.name === name);

  if (userIndex !== -1) {
    leaderboardData[userIndex].score = newScore;
    populateLeaderboard();
  }
}

// Call the function to populate the leaderboard when the page loads
populateLeaderboard();

// Example: To update John's score
// updateLeaderboard("John", 110);
