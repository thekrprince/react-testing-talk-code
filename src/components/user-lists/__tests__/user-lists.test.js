import { render, screen, waitFor } from "@testing-library/react";
import UserLists from "..";

const mockResponse = {
  data: [
    {
      firstName: "Person1",
      id: "60d0fe4f5311236168a109ca",
      lastName: "Andersen",
      picture: "https://randomuser.me/api/portraits/women/58.jpg",
      title: "ms",
    },
    {
      firstName: "Person2",
      id: "60d0fe4f5311236168a109cb",
      lastName: "Andersen",
      picture: "https://randomuser.me/api/portraits/women/58.jpg",
      title: "ms",
    },
    {
      firstName: "Person3",
      id: "60d0fe4f5311236168a109ca",
      lastName: "Andersen",
      picture: "https://randomuser.me/api/portraits/women/58.jpg",
      title: "ms",
    },
  ],
};

describe("UserLists component", () => {
  //   beforeEach(() => {
  //     global.fetch.resetMocks();
  //   });
  it("test user list", async () => {
    // global.fetch.mockResponseOnce(JSON.stringify(mockResponse));

    render(<UserLists />);

    const userDiv = await screen.findByTestId("user-0");
    expect(userDiv).toBeInTheDocument();

    //   const allUserDiv = await screen.findAllByTestId(/user/);
    //   expect(allUserDiv.length).toBe(10);
  });
});
