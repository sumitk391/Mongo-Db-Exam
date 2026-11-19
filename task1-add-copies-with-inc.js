// Task 1: Add copies with $inc
// Two new copies of "Operating Systems" arrived
use libraryDB

db.books.updateOne(
  { title: "Operating Systems" },
  { $inc: { copies: 2 } }
)

// Expected output:
// matchedCount: 1, modifiedCount: 1
// Copies of Operating Systems change from 3 to 5.
