# basic-gear-api
simple objects to retrieve 

## Routes
{
  GET /items
}


### Structure
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

#### Slot
Possible values: head, chest, legs, gauntlets, rings, boots


