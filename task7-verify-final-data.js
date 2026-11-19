// Task 7: Verify the final data
// Show only title and copies (hide _id), sorted by title
use libraryDB

db.books.find({}, { _id: 0, title: 1, copies: 1 }).sort({ title: 1 })

// Expected output:
// [
//   { title: 'Artificial Intelligence', copies: 4 },
//   { title: 'Computer Networks',       copies: 3 },
//   { title: 'Database Systems',        copies: 4 },
//   { title: 'Operating Systems',       copies: 5 }
// ]
