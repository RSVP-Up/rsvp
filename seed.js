const faker = require('faker');

// {
//   memberId: String(“m” + Number),
//   avatar: String(URL),
//   thumbnail: String(URL),
//   name: String,
//   events: [
//     {
//       eventId: Number,
//       eventOrganizer: Boolean,
//       status: Boolean,
//       favorite: Boolean
//     }
//   ]
// }

let attendees = [];

for (let i = 0; i <= 499; i++) {
  const memberId = `m${i}`;
  const avatar = 'http://placecorgi.com/50';
  const thumbnail = 'http://placecorgi.com/100';
  const name = faker.name.findName();
  const eventId = Math.floor(Math.random() * 100);
  const eventOrganizer = faker.random.boolean();
  const status = faker.random.boolean();
  const favorite = faker.random.boolean();

  let newUser = {
    memberId,
    avatar,
    thumbnail,
    name,
    events: [
      {
        eventId,
        eventOrganizer,
        status,
        favorite
      }
    ]
  };

  attendees.push(newUser);
}