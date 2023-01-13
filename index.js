// code your solution here
function saturdayFun(activity = 'roller-skate') {
    console.log(`This Saturday, I want to ${activity}!`);
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun()
saturdayFun("bathe my dog")

function mondayWork(commitment = 'go to the office'){
    console.log(`This Monday, I will ${commitment}.`);
    return (`This Monday, I will ${commitment}.`);
}
mondayWork()
mondayWork('work from home')

function wrapAdjective(adjective) {
    const innie = function (description = "goober") {
        console.log(`You are ${adjective}${description}${adjective}!  `);
        return `You are ${adjective}${description}${adjective}!`
      }
      console.log(innie)
      return innie;
}

wrapAdjective('adjective')