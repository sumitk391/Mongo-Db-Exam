// Task 6: Delete many matching documents
// Remove every book whose status is "damaged" or "lost"
use libraryDB

db.books.deleteMany({ status: { $in: ["damaged", "lost"] } })

// Expected output:
// { acknowledged: true, deletedCount: 2 }
//
// Torn Notes and Water-damaged Atlas are deleted.
// No book has the status "lost", which is fine - $in matches any value in the list.
