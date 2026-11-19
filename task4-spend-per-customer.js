// Task 4: Spend per customer (delivered orders only, biggest spender first)
// $project renames _id to customer
use cafeDB

db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: {
      _id: "$customer",
      orders: { $sum: 1 },
      totalSpend: { $sum: { $multiply: ["$qty", "$price"] } }
  } },
  { $sort: { totalSpend: -1 } },
  { $project: { _id: 0, customer: "$_id", orders: 1, totalSpend: 1 } }
])

// Expected output:
// [
//   { customer: 'Meena',   orders: 2, totalSpend: 490 },
//   { customer: 'Karthik', orders: 1, totalSpend: 360 },
//   { customer: 'Ravi',    orders: 2, totalSpend: 300 }
// ]
