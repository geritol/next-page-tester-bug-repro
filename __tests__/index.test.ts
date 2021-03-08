import { getPage } from "next-page-tester";

describe("Home page", () => {
  it("renders blog page", async () => {
    const { render } = await getPage({
      route: "/",
    });
  });
});
