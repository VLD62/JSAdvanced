function heroicInventory(input){
    class Hero {
        constructor(heroName, heroLevel, items) {
          this.name = heroName;
          this.level = heroLevel;     
          this.items = items;  
        }
    }
    let heroesArray = [];
    input.forEach(element => {
        heroInfo = element.split(" / ");
        let hero = new Hero(heroInfo[0], Number(heroInfo[1]), heroInfo[2] ? heroInfo[2].split(", "): []);
        heroesArray.push(hero);
    });
    console.log(JSON.stringify(heroesArray));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)