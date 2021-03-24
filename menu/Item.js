class Item
{
    constructor(itemName, itemDescription = "", itemPrice, itemPrepTime = undefined, itemImages = undefined, itemIngredients = undefined, itemAvailability = false, itemPopularity = false)
    {
        //this.itemID = 
        this.itemName = itemName;
        this.itemDescription = itemDescription;
        this.itemPrice = itemPrice;
        this.itemPrepTime = itemPrepTime;
        this.itemImages = itemImages;
        this.itemIngredients = itemIngredients;
        this.itemAvailability = itemAvailability;
        this.itemPopularity = itemPopularity;
        this.itemDeleted = false;
    }

	setItemAvailablility(itemAvailability)
	{
		this.itemAvailability = itemAvailability;
	}

	setItemPopularity(itemPopularity)
	{
		this.itemPopularity = itemPopularity;
	}
	
    addItemIngredient(ingredient)
    {
        this.itemIngredients.push(ingredient);
    }

    deleteItemIngredient(ingredient)
    {
        this.itemIngredients.splice(this.itemIngredients.indexOf(ingredient),1);
    }

	addItemImage(addedImage)
    {
        this.itemImages.push(addedImage);
    }

	deleteItemImage(deletedImage)
	{
		this.itemImages.splice(this.itemImages.indexOf(deletedImage),1);
		// TODO figure out if this works
	}

	deleteItem(item)
	{
		this.itemDeleted = true;
	}

    editItemData(dataToEdit)
    {
		// TODO edge case that name/description are empty string default
		//   by ignores that input and doesn't change a thing
		// TODO edge case that price/prepTime 0 is NOT HANDLED
		// TODO handle the 3 bools

        if(dataToEdit.itemName)
        {
            this.itemName = dataToEdit.itemName;
        }
        if(dataToEdit.itemDescription)
        {
            this.itemDescription = dataToEdit.itemDescription;
        }
        if(dataToEdit.itemPrice)
        {
            this.itemPrice = dataToEdit.itemPrice;
        }
        if(dataToEdit.itemPrepTime)
        {
            this.itemPrepTime = dataToEdit.itemPrepTime;
        }
		if(dataToEdit.itemIngredientsAdded)
        {
            dataToEdit.itemIngredientsAdded.forEach(ingredientAdded => {
				this.addItemIngredient(ingredientAdded)
			});
        }
		if(dataToEdit.itemIngredientsRemoved)
        {
            tdataToEdit.itemIngredientsRemoved.forEach(ingredientRemoved => {
				this.deleteItemIngredient(ingredientRemoved)
			});
        }
		if(dataToEdit.itemImagesAdded)
        {
			dataToEdit.itemImagesAdded.forEach(imageAdded => {
				this.addItemImage(imageAdded)
			});
        }
		if(dataToEdit.itemImagesRemoved)
        {
			dataToEdit.itemImagesRemoved.forEach(imageRemoved => {
				this.deleteItemImage(imageRemoved)
			});
        }
		// Availability, popularity and deleted cannot be handled here because they are boolean
    }
}

export { Item };