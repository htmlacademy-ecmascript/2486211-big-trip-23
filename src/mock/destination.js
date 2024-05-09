const mockDestinations = [
  {
    id: 'ea54fb8f-9dfa-4ed4-886f-0c1b4376cc09',
    description: 'Kioto - middle-eastern paradise',
    name: 'Kioto',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Kioto is a beautiful city'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        description: 'Kioto with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Kioto with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/2.jpg',
        description: 'Kioto famous for its crowded street markets with the best street food in Asia'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Kioto a true asian pearl'
      }
    ]
  },
  {
    id: 'ad6c5c6a-9b1a-4666-a993-11e1e7096ba8',
    description: 'Paris - famous for its crowded street markets with the best street food in Asia',
    name: 'Paris',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/7.jpg',
        description: 'Paris is a beautiful city'
      }
    ]
  },
  {
    id: 'e3141dc4-c08b-4a46-8f3c-ed52c1349f4a',
    description: 'Monaco - is a beautiful city',
    name: 'Monaco',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        description: 'Monaco with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Monaco with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Monaco a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Monaco a perfect place to stay with a family'
      }
    ]
  },
  {
    id: '5282e5ca-e345-4cd3-b34f-870599815323',
    description: 'Rome - in a middle of Europe',
    name: 'Rome',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Rome is a beautiful city'
      }
    ]
  },
  {
    id: '2857178d-6f63-48a3-8871-5e81577bc39a',
    description: 'Naples - in a middle of Europe',
    name: 'Naples',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Naples full of of cozy canteens where you can try the best coffee in the Middle East'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Naples a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Naples with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Naples with crowded streets'
      }
    ]
  },
  {
    id: '47016e78-d41a-40a9-986a-14f1b5630a6d',
    description: 'Milan - middle-eastern paradise',
    name: 'Milan',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Milan with an embankment of a mighty river as a centre of attraction'
      }
    ]
  },
  {
    id: 'e4c577d2-a3f0-4750-b345-fb12ed7a881f',
    description: 'Nagasaki - middle-eastern paradise',
    name: 'Nagasaki',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        description: 'Nagasaki is a beautiful city'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        description: 'Nagasaki middle-eastern paradise'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Nagasaki famous for its crowded street markets with the best street food in Asia'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        description: 'Nagasaki is a beautiful city'
      }
    ]
  },
  {
    id: 'efdc3a59-a5eb-425f-9fa0-f22204146e05',
    description: 'Kopenhagen - with crowded streets',
    name: 'Kopenhagen',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Kopenhagen is a beautiful city'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        description: 'Kopenhagen with a beautiful old town'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Kopenhagen a true asian pearl'
      }
    ]
  },
  {
    id: 'c0e3990d-f125-4866-a5c8-a1723b02c43c',
    description: 'Sochi - for those who value comfort and coziness',
    name: 'Sochi',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        description: 'Sochi in a middle of Europe'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/16.jpg',
        description: 'Sochi with crowded streets'
      }
    ]
  },
  {
    id: 'd38732da-b1dc-44ee-b139-541c722f9e13',
    description: 'Helsinki - with a beautiful old town',
    name: 'Helsinki',
    pictures: [
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/8.jpg',
        description: 'Helsinki with an embankment of a mighty river as a centre of attraction'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/4.jpg',
        description: 'Helsinki with crowded streets'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/6.jpg',
        description: 'Helsinki a true asian pearl'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        description: 'Helsinki middle-eastern paradise'
      },
      {
        src: 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        description: 'Helsinki a true asian pearl'
      }
    ]
  }
];

export { mockDestinations };

