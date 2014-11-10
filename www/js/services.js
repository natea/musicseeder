angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Events', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var events = [
    { 
      id: 0, 
      name: 'George Garzone', 
      date: '11/10', 
      time: '8:00pm', 
      venue: 'Lily Pad',
      image: 'http://georgegarzone.com/i/GeorgeIndexPic.jpg',
      headshot: 'http://www.berklee.edu/sites/default/files/styles/width_400px_max/public/130.png?itok=NmyEJi3R',
      description: 'The Fringe is a jazz trio founded in 1972 that includes saxophonist George Garzone, bassist John Lockwood and drummer Bob Gullotti, that performs regularly in the Boston area and has toured world wide.'
    },
    { 
      id: 1, 
      name: 'Tev Stevig',
      date: '11/12',
      time: '7:30pm',
      venue: 'Beehive' 
    },
    { 
      id: 2, 
      name: 'Tim Miller',
      date: '11/13',
      time: '9:00pm',
      venue: 'Regattabar' 
    },
    { id: 4, 
      name: 'Winnie Dahlgren',
      date: '11/14',
      time: '8:30pm',
      venue: 'Scullers'
    },
    { id: 5, 
      name: 'Vardan Ovsepian',
      date: '11/15',
      time: '8:00pm',
      venue: 'Berklee Performance Center'
    },   
    { 
      id: 6, 
      name: 'Bruno Raberg',
      date: '11/16',
      time: '7:30pm',
      venue: 'Beehive' 
    },
    { 
      id: 7, 
      name: 'Tim Miller',
      date: '11/17',
      time: '7:30pm',
      venue: 'Regattabar' 
    }, 
    { 
      id: 8, 
      name: 'The Fringe',
      date: '11/12',
      time: '7:30pm',
      venue: 'Lizard Lounge' 
    }, 
  ];
  // var events = [
  //   { 
  //     id: 0, 
  //     name: 'George Garzone', 
  //     date: 'Mon 10 Nov', 
  //     time: '8:00pm', 
  //     venue: 'Lily Pad',
  //     image: 'http://georgegarzone.com/i/GeorgeIndexPic.jpg',
  //     headshot: 'http://www.berklee.edu/sites/default/files/styles/width_400px_max/public/130.png?itok=NmyEJi3R',
  //     description: 'The Fringe is a jazz trio founded in 1972 that includes saxophonist George Garzone, bassist John Lockwood and drummer Bob Gullotti, that performs regularly in the Boston area and has toured world wide.'
  //   },
  //   { 
  //     id: 1, 
  //     name: 'Tev Stevig',
  //     date: 'Wed 12 Nov',
  //     time: '7:30pm',
  //     venue: 'Beehive' 
  //   },
  //   { 
  //     id: 2, 
  //     name: 'Tim Miller',
  //     date: 'Thurs 13 Nov',
  //     time: '9:00pm',
  //     venue: 'Regattabar' 
  //   },
  //   { id: 4, 
  //     name: 'Winnie Dahlgren',
  //     date: 'Fri 14 Nov',
  //     time: '8:30pm',
  //     venue: 'Scullers'
  //   },
  //   { id: 5, 
  //     name: 'Vardan Ovsepian',
  //     date: 'Sat 15 Nov',
  //     time: '8:00pm',
  //     venue: 'Berklee Performance Center'
  //   },   
  //    { 
  //     id: 6, 
  //     name: 'Bruno Raberg',
  //     date: 'Sun 16 Nov',
  //     time: '7:30pm',
  //     venue: 'Beehive' 
  //   },
  //    { 
  //     id: 7, 
  //     name: 'Tim Miller',
  //     date: 'Mon 17 Nov',
  //     time: '7:30pm',
  //     venue: 'Regattabar' 
  //   }, 
  // ];

  return {
    all: function() {
      return events;
    },
    get: function(eventId) {
      // Simple index lookup
      return events[eventId];
    }
  }
});
