function groceryInventorySystem() {
    const hardcodedTransactions = [
    ['peaches', 'restock', 80, 0.6],
    ['oranges', 'restock', 120, 0.4],
    ['tomatoes', 'restock', 150, 0.25],
    ['grapes', 'sale', 60, 0.9],
    ['peaches', 'sale', 50, 0.6],
    ['oranges', 'sale', 100, 0.4],
    ['tomatoes', 'sale', 120, 0.25],
    ['peaches', 'restock', 100, 0.6],
    ['oranges', 'restock', 80, 0.4],
    ['lettuce', 'restock', 200, 0.15],
    ['grapes', 'restock', 150, 0.9],
    ['lettuce', 'sale', 100, 0.15],
    ['grapes', 'sale', 70, 0.9],
    ['watermelons', 'restock', 40, 1.0],
    ['watermelons', 'sale', 20, 1.0],
    ['lettuce', 'restock', 150, 0.15],
    ['tomatoes', 'restock', 100, 0.25],
    ['avocados', 'restock', 60, 0.8],
    ['avocados', 'sale', 30, 0.8]
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
