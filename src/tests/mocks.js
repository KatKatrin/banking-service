jest.mock('typeorm', () => {
  const original = jest.requireActual('typeorm');

  return {
    ...original,
    getRepository: jest.fn(),
  };
});

