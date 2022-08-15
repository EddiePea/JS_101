**INSTRUCTIONS**
- Function
- Args: 2
  - Inventory item ID
  - List of transactions - array containing object elements
- Returns: array
  - Contains transactions only for specified inventory item

**OUTLINE**
- INPUT: 
- OUTPUT:

**REQUIREMENTS**

**ASSUMPTIONS**
- Transactions arg -> array containing object elements each time
- Returns NEW array

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**
- Declare function with 2 params
  - id param (idNum)
  - transactions param (transArr)
- Loop through transArr
- Filter for transArr elements that contain property ['id'] with value idNum
- Return filteredArr

**NOTES**
- Remember -> you can use dot notation with actual property names
- Ask yourself: is this a property name or variable?