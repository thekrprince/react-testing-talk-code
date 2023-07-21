const mockResponse = [
  {
    firstName: "Sara",
    id: "60d0fe4f5311236168a109ca",
    lastName: "Andersen",
    picture: "https://randomuser.me/api/portraits/women/58.jpg",
    title: "ms",
  },
];

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: mockResponse,
      }),
  });
});
