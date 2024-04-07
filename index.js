function dragonBallCode(powerLevel){
  // create your if statements below
       if (powerLevel % 3 == 0 && powerLevel % 5 == 0){
         return ("Gogeta");
       } if (powerLevel % 3 == 0){
         return ("Goku");
       } if (powerLevel % 5 == 0){
         return ("Vegeta");
       }
  }

module.exports = {dragonBallCode};