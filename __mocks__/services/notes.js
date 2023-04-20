module.exports = {
  createNote: jest.fn(() => Promise.resolve({ verification: "createNote" })),
};
