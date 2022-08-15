**INSTRUCTIONS**
- Function
- Args: 2
  - Inventory item (num)
  - List of transactions (arr, object elements)
- Returns: Boolean -> is inventory item available?
  - Returns true if sum of quantity values of item's transaction > 0
- Watch out for: movement property in each transaction object  
  - Movement value 'out' decreases item's quantity

**OUTLINE**
- INPUT: idNum (for item wanted), array (of objects - indicate transactions)
- OUTPUT: boolean

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- 

**ALGORITHM**
- Filter array for items with relevant ID
- Set total variable to 0
- Loop over filteredArr
  - If obj.movement === 'in'
    - Increase total by value of obj.quantity;
  - If obj.movement === 'out'
    - Reduce total by value of obj.quantity
- Evaluate whether total > 0:
  - If yes: return true
  - If no: return false

**NOTES**
