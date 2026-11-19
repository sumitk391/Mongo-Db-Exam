// Task 5: Find the best customer
// Same report as Task 4, but keep only the top spender with $limit: 1
use cafeDB

db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: {
      _id: "$customer",
      totalSpend: { $sum: { $multiply: ["$qty", "$price"] } }
  } },
  { $sort: { totalSpend: -1 } },
  { $limit: 1 }
])

// Expected output:
// [ { _id: 'Meena', totalSpend: 490 } ]
