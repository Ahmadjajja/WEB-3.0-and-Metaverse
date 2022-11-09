class Animal {
  constructor(sound,animalName) {
    this.sound = sound;
    this.animalName = animalName;
  }
  animalDetail() {
    console.log(`${this.animalName} have the sound ${this.sound}`);
  }
}

var object = new Animal("hehe", "ghorra");
object.animalDetail();
Animal.prototype.AnimalInfo = function () {
    console.log(`Hi ! This horse ${this.animalName} have beautiful sound ${this.sound}`);
}
object.AnimalInfo();
