import App from "./app";

import AdminController from "./controllers/Admin";
import AssetsController from "./controllers/Assets";
import CoverImageController from "./controllers/CoverImage";
import PortfolioItemController from "./controllers/PortfolioItem";
import UserController from "./controllers/User";

import { Controller } from "./types";

const main = async (): Promise<void> => {
  try {
    if (!process.env.PORT) throw new Error("No PORT");

    const controllers: Controller[] = [
      new AdminController(),
      new AssetsController(),
      new CoverImageController(),
      new PortfolioItemController(),
      new UserController(),
    ];

    const app = new App(controllers, process.env.PORT);

    app.listen();
  } catch (error) {
    console.error(error);
  }
};

main();
