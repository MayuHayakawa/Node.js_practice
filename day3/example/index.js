import EventEmitter from "events";
import dotenv from "dotenv";
dotenv.config();

// console.log(EventEmitter);

const eventEmitter = new EventEmitter();
// console.log(eventEmitter);

function subsMessage(isSubscribe) {
    if(isSubscribe) {
        console.log('Thanks for subscribe!');
    } else {
        console.log('Please subscribe!');
    }
}

eventEmitter.on("event", (data) => {
    subsMessage(data.isSubscribe);
});

eventEmitter.emit('event', { name: 'joe', isSubscribe: true });

//npm i dotenv
console.log(process.env.PORT);
console.log(process.env.API_KEY);
console.log(process.env.BASE_URL);


