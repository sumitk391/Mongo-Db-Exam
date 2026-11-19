// Task 3: Upsert
// Update "Artificial Intelligence" if it exists, otherwise insert it.
// The title of the new document comes from the filter.
use libraryDB

// --- First run ---
db.books.updateOne(
  { title: "Artificial Intelligence" },
  { $set: { author: "Russell", copies: 4, status: "available" } },
  { upsert: true }
)

// First run - no matching book exists, so a new document is inserted:
// {
//   acknowledged: true,
//   insertedId: ObjectId('...'),
//   matchedCount: 0, modifiedCount: 0, upsertedCount: 1
// }


// --- Second run (exact same command) ---
db.books.updateOne(
  { title: "Artificial Intelligence" },
  { $set: { author: "Russell", copies: 4, status: "available" } },
  { upsert: true }
)

// Second run - the book now exists and nothing needs to change,
// so no duplicate is created:
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1, modifiedCount: 0, upsertedCount: 0
// }

// Comparison:
//   1st run: matched 0, modified 0, upserted 1  -> document inserted
//   2nd run: matched 1, modified 0, upserted 0  -> found, values identical, no change
