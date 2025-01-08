function groceryInventorySystem() {
    const hardcodedTransactions = [
    ['milk', 'restock', 200, 1.2],
    ['bread', 'restock', 180, 1.0],
    ['cheese', 'restock', 90, 2.0],
    ['milk', 'sale', 150, 1.2],
    ['bread', 'sale', 170, 1.0],
    ['cheese', 'sale', 40, 2.0],
    ['milk', 'restock', 100, 1.2],
    ['bread', 'restock', 150, 1.0],
    ['yogurt', 'restock', 120, 0.8],
    ['yogurt', 'sale', 80, 0.8],
    ['cheese', 'restock', 70, 2.0],
    ['apples', 'restock', 220, 0.5],
    ['apples', 'sale', 200, 0.5],
    ['yogurt', 'restock', 100, 0.8]
];


    let inventory = {};
    let totalRevenue = 0.0;
    let itemsToRestock = new Set();
    const restockThreshold = 50; // Minimum stock level before restocking

    for (let i = 0; i < hardcodedTransactions.length; i++) {
        const transaction = hardcodedTransactions[i];
        const item = transaction[0];
        const type = transaction[1];
        const quantity = transaction[2];
        const price = transaction[3];

        if (type === 'restock') {
            if (!inventory[item]) {
                inventory[item] = quantity;
            } else {
                inventory[item] += quantity;
            }
        } else if (type === 'sale') {
            inventory[item] -= quantity;
            totalRevenue += quantity * price;
            if (inventory[item] < restockThreshold) {
                itemsToRestock.add(item);
            }
        }
    }

    console.log("\nGrocery Inventory Summary:");
    console.log(`Items to restock: ${[...itemsToRestock].join(', ')}`);
    console.log(`Total revenue: $${totalRevenue.toFixed(2)}`);

    const summaryInfo = {
        itemsToRestock: [...itemsToRestock],
        totalRevenue: totalRevenue
    };

    return summaryInfo;
}

const summary = groceryInventorySystem();
