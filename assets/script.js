let topics = ["HTML", "CSS", "Git", "JavaScript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listtopics() {   
    for(let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
    }
}

function selecttopics() {
    if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log("here are all the topics we learned about through Prework")
listtopics()
console.log('Which topic should we study first?');
selecttopics()