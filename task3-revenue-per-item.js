// Task 3: Revenue per item (delivered orders only, highest revenue first)
use cafeDB

db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: {
      _id: "$item",
      totalQty: { $sum: "$qty" },
      revenue:  { $sum: { $multiply: ["$qty", "$price"] } }
  } },
  { $sort: { revenue: -1 } }
])

// Expected output:
// [
//   { _id: 'Coffee',   totalQty: 6, revenue: 720 },
//   { _id: 'Cake',     totalQty: 1, revenue: 250 },
//   { _id: 'Sandwich', totalQty: 1, revenue: 180 }
// ]
//
// Check: Coffee = (2 + 3 + 1) = 6 cups x 120 = 720
