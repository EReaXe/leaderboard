// Sample leaderboard data
let leaderboardData = [
  { name: "̶Ali K.", score: 14 },
  { name: "̶Beof Karaca", score: 25 },  
  { name: "̶Erkan Erkanson", score: 12 },
  { name: "Etli Pilav", score: 26 },
  { name: "̶Faruk", score: 13 },
  { name: "̶G. Ahmet M. P.", score: 22 },
  { name: "̶LunarLords", score: 23 },
  { name: "̶Melih Dolarım", score: 17 },
  { name: "̶̶Minar Sinan", score: 24 },
  { name: "̶Mustafa Rock", score: 21 },
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
