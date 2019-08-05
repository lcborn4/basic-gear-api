# basic-gear-api
simple objects to retrieve 

## Routes
Home: GET https://create-character-items.herokuapp.com/

Items: GET https://create-character-items.herokuapp.com/items

## Structure
    {
      name: string,
      slot: string,
      type: string, //not used for rings
      attributes: {
        health: number,
        attack: number,
        defense: number,
        mana: number,
      }
    }

### Slot
Possible values: head, chest, legs, gauntlets, boots, ring

2 rings

### Type
#### Armor Type
Possible values: cloth, leather, plate

## Calling Routes
### GIFs
![calling items](https://github.com/lcborn4/basic-gear-api/blob/master/calling_items.gif)
