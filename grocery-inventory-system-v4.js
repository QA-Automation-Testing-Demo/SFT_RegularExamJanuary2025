function groceryInventorySystem() {
    const hardcodedTransactions = [
    ['pumpkins', 'restock', 50, 3.0],
    ['maple syrup', 'restock', 80, 4.5],
    ['cinnamon sticks', 'restock', 100, 0.75],
    ['pumpkins', 'sale', 30, 3.0],
    ['maple syrup', 'sale', 60, 4.5],
    ['cinnamon sticks', 'sale', 90, 0.75],
    ['pumpkins', 'restock', 40, 3.0],
    ['maple syrup', 'restock', 50, 4.5],
    ['candy corn', 'restock', 150, 0.2],
    ['candy corn', 'sale', 100, 0.2],
    ['cinnamon sticks', 'restock', 120, 0.75],
    ['hot chocolate', 'restock', 100, 1.5],
    ['hot chocolate', 'sale', 80, 1.5],
    ['apples', 'restock', 100, 0.5],
    ['apples', 'sale', 60, 0.5]
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
