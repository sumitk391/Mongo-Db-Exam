// Task 2: Filter with $match and shape with $project
// Only delivered orders; show just customer, item and qty (hide _id)
use cafeDB

db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $project: { _id: 0, customer: 1, item: 1, qty: 1 } }
])

// Expected output:
// [
//   { customer: 'Meena',   item: 'Coffee',   qty: 2 },
//   { customer: 'Ravi',    item: 'Sandwich', qty: 1 },
//   { customer: 'Karthik', item: 'Coffee',   qty: 3 },
//   { customer: 'Ravi',    item: 'Coffee',   qty: 1 },
//   { customer: 'Meena',   item: 'Cake',     qty: 1 }
// ]
