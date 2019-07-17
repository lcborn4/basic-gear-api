# basic-gear-api
simple objects to retrieve 

## Routes
Home: GET https://create-character-items.herokuapp.com/

Items: GET https://create-character-items.herokuapp.com/items

## Structure
    {
      name: string,
      slot: string,
      attributes: {
        health: number,
        attack: number,
        defense: number,
        mana: number,
      }
    }

### Slot
Possible values: head, chest, legs, gauntlets, rings, boots

## Calling Routes
### GIFs
TODO
