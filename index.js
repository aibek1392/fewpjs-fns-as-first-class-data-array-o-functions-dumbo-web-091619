var wakeDog = function(dogName = "Xerox", dogBreed = "Border Collie"){
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}

var leashDog = function(dogName = "Boo Radley", dogBreed = "Pibble"){
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
}
var walkToPark = function(dogName = "Bunny", dogBreed = "Labrador"){
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`

}
var throwFrisbee = function(dogName = "for Mary J. Blige", dogBreed = "Papillon"){
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`

}
var walkHome = function(dogName = "Santa Paws", dogBreed = "Husky"){
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`

}

 var unleashDog = function(dogName = "Lauren", dogBreed = "Golden Retriever"){
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`

}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dog, breed){
    return routine.map(fn => fn(dog, breed))
}