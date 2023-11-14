// Sample leaderboard data
let leaderboardData = [
  { name: "̶A̶l̶i̶ ̶K̶.̶", score: 8 },
  { name: "Beof Karaca", score: 11.5 },
  { name: "̶E̶r̶k̶a̶n̶ ̶E̶r̶k̶a̶n̶s̶o̶n̶", score: 7 },
  { name: "Etli Pilav", score: 10.5 },
  { name: "̶F̶a̶r̶u̶k̶", score: 7.5 },
  { name: "G. Ahmet M. P.", score: 14 },
  { name: "LunarLords", score: 12 },
  { name: "̶M̶e̶l̶i̶h̶ ̶D̶o̶l̶a̶r̶ı̶m̶", score: 12 },
  { name: "Mimar Sinan", score: 13.5 },
  { name: "Mustafa Rock", score: 13.5 },
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
