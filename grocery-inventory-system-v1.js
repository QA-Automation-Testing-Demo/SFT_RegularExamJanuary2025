function groceryInventorySystem() {
    const hardcodedTransactions = [
        ['apples', 'restock', 100, 0.5],
        ['bananas', 'restock', 150, 0.3],
        ['carrots', 'restock', 200, 0.2],
        ['dates', 'sale', 50, 0.8],
        ['apples', 'sale', 40, 0.5],
        ['bananas', 'sale', 80, 0.3],
        ['carrots', 'sale', 100, 0.2],
        ['apples', 'restock', 60, 0.5],
        ['bananas', 'restock', 100, 0.3],
        ['eggs', 'restock', 300, 0.1],
        ['dates', 'restock', 100, 0.8],
        ['eggs', 'sale', 150, 0.1],
        ['dates', 'sale', 40, 0.8]
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
