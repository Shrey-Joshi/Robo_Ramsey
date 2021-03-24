import { Item } from "Item";

class Menu
{
    constructor()
    {
        // this.menuID =
		// this.menuName = (?) 
        this.itemDB; // DB Items table pointer
    }

    addItem(itemData)
    {
		newItem = new Item(
			itemData.itemName,
			itemData.itemDescription,
			itemData.itemPrice,
			itemData.itemPrepTime,
			itemData.itemImages,
			itemData.itemIngredients,
			itemData.itemAvailability,
			itemData.itemPopularity
		) 
		// Looked for it but didn't find suitable destructuring that doesn't mess up order here so ehh
        
		this.itemDB.push(newItem); // DB related thing, TODO
    }

    deleteItem(itemToDelete)
    {
		DB.find(itemToDelete).deleteItem(); // DB related thing, TODO
		// If theres a function that edits object X, and X is stored in DB Y:
		//  Does doing X.value = otherValue change the value in DB? else 
		//    push this back to db as needed
    }

    editItem(item, itemData)
    {
		DB.find(item).editItem(itemData)
    }

	// TODO functions:
	getAllItems()
	{
		return DB.getAllItems()
	}

	getItems(itemConstraints)
	{
		return DB.getFilteredItems(itemConstraints)
	}
}