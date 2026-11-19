// Setup: libraryDB.books
use libraryDB

// start clean so the script can be re-run
db.books.drop()

db.books.insertMany([
  { _id: 1, title: "Database Systems",    author: "Elmasri",   copies: 5, status: "available" },
  { _id: 2, title: "Operating Systems",   author: "Galvin",    copies: 3, status: "available" },
  { _id: 3, title: "Computer Networks",   author: "Tanenbaum", copies: 0, status: "unavailable" },
  { _id: 4, title: "Old Almanac 1990",    author: "Unknown",   copies: 0, status: "unavailable" },
  { _id: 5, title: "Torn Notes",          author: "Unknown",   copies: 0, status: "damaged" },
  { _id: 6, title: "Water-damaged Atlas", author: "Unknown",   copies: 1, status: "damaged" }
])
