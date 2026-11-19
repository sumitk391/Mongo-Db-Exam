// Task 4: Update expression with $set and $inc together
// New stock of "Computer Networks": set status and add 3 copies in ONE update
use libraryDB

db.books.updateOne(
  { title: "Computer Networks" },
  {
    $set: { status: "available" },
    $inc: { copies: 3 }
  }
)

// Expected output:
// matchedCount: 1, modifiedCount: 1
// Computer Networks now has copies: 3 and status: 'available'.
