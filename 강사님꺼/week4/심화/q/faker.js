import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const randomId = {
  generate() {
    return Math.floor(Math.random() * 100000 + 1);
  },
};

export const MockPosts = (count) =>
  Array(count)
    .fill()
    .map(() => ({
      id: randomId.generate(),
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      User: {
        id: randomId.generate(),
        nickName: faker.name.firstName(),
        profileImg: faker.image.image(),
      },
      Post_img: Array(Math.floor(Math.random() * 3) + 1)
        .fill()
        .map(() => faker.image.imageUrl()),
      Comments: Array(Math.floor(Math.random() * 5) + 1)
        .fill()
        .map(() => {
          return {
            id: randomId.generate(),
            content: faker.lorem.sentence(),
            User: {
              id: randomId.generate(),
              nickName: faker.name.firstName(),
              profileImg: faker.image.image(),
            },
            myComment: false,
            createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
          };
        }),
      createdAt: faker.date.between('2023-01-01T00:00:00.000Z', '2023-01-31T00:00:00.000Z'),
      myPost: false,
    }));
