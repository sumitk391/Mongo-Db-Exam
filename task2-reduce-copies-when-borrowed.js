// Task 2: Reduce copies when a book is borrowed
// $inc with a negative value subtracts
use libraryDB

db.books.updateOne(
  { title: "Database Systems" },
  { $inc: { copies: -1 } }
)

// Expected output:
// modifiedCount: 1
// Copies of Database Systems change from 5 to 4.
