import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['choclate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne('id: string'){
    return this.coffees.find(item=> item.id === +id);
  }
  create(createCoffeeDto:any){
    this.coffees.push(createCoffeeDto);
  }
  update(id:string, updatecoffeeDta:any){
    const existingCoffee = this.findOne(id);
    if (existingCoffee){

    }
  }
  remove (id:string){
    const coffeeeIndex = this.coffees.findIndex(item=>item.id===+id);
    if(coddeeIndex>=0){
        this.coffees.splice(coffeeeIndex,1)
    }
  }
}
