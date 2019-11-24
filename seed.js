const faker = require('faker');
const _ = require('lodash');

// {
//   memberId: String('m' + Number)
//   name: String
//   avatar: String(URL)
//   thumbnail: String(URL)
//   eventOrganizer: Boolean
//   favorite: Boolean
// }

// {
//   eventId: Number
//   limit: Boolean
//   setLimit: Number / NULL
//   attendees: Array
//   waitlist: Array
// }



// Attendees
let members = [];

for (let i = 0; i < 499; i++) {
  const memberId = `m${i}`;
  const name = faker.name.findName();
  const avatar = 'http://placecorgi.com/100';
  const thumbnail = 'http://placecorgi.com/50';
  const favorite = faker.random.boolean();

  let newMember = {
    memberId,
    name,
    avatar,
    thumbnail,
    favorite
  }

  members.push(newMember)
}


// Events
let events = [];

for (let i = 0; i < 100; i++) {
  const eventId = i;
  const limit = faker.random.boolean();
  const setLimit = limit ? faker.random.number({ min: 20, max: 100 }) : null;
  const randomNum = faker.random.number({ min: 1, max: 100 });
  const attendees = _.sampleSize(members, randomNum);
  const eventOrganizer = faker.random.number({ min: 1, max: 2 })
  const waitlist = attendees.length > limit ? _.sampleSize(members, randomNum) : null;

  let newEvents = {
    eventId,
    limit,
    setLimit,
    attendees,
    eventOrganizer,
    waitlist,
  };

  events.push(newEvents);
}
