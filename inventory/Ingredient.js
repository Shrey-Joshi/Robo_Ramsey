class Ingredient
{
    constructor(name, type , SKU, count=0, unit)
    {
        //this.ingredientID = 
        this.ingredientName = name;
        this.ingredientType = type;
        this.ingredientSKU = SKU;
        this.ingredientCount = count;
        this.ingredientUnit = unit;
    }

    editIngredient(edits)
    {
        if(edits.ingredientName)
        {
          this.ingredientName = edits.itemName;
        }
        if(edits.ingredientType)
        {
        this.ingredientType = edits.itemType;
        }
        if(edits.ingredientSKU)
        {
        this.ingredientSKU = edits.itemSKU;
        }
        if(edits.ingredientCount)
        {
        this.ingredientCount = edits.itemCount;
        }
        if(edits.ingredientUnit)
        {
        this.ingredientUnit = edits.itemUnit;
        }
    }
}

