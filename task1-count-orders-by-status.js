// Task 1: Count orders by status (most orders first)
use cafeDB

db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
  // secondary sort on _id keeps ties (cancelled / pending) in a stable order
  { $sort: { count: -1, _id: 1 } }
])

// Expected output:
// [
//   { _id: 'delivered', count: 5 },
//   { _id: 'cancelled', count: 1 },
//   { _id: 'pending',   count: 1 }
// ]
