import CreateUser from "pages/crud/CreateUser";
import EditUser from "pages/crud/EditUser";
import ListUsers from "pages/crud/ListUsers";
import ShowUser from "pages/crud/ShowUser"

import ListRandomUsers from "pages/randomUsers/ListRandomUsers";

import { Refine } from "@pankod/refine-core";
import {
  Layout,
  notificationProvider,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/reset.css";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { ColorModeContextProvider } from "contexts";
import randomCat from "pages/httpCat/randomCat";
import randomDog from "pages/randomDog/randomDog";
import { Login } from "pages/login/index";


function App() {
  
  return (
    <ColorModeContextProvider>
      <Refine
        notificationProvider={notificationProvider}
        Layout={Layout}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        routerProvider={routerProvider}
        LoginPage={Login}
        dataProvider={dataProvider("http://localhost:3333")}
        resources={[
          {
            name: "randomUsers",
            list: ListRandomUsers,
          },
          {
            name: "httpCat",
            list: randomCat,
          },
          {
            name: "randomDog",
            list: randomDog,
          },
          {
            name: "clients",
            list: ListUsers,
            create: CreateUser,
            edit: EditUser,
            show: ShowUser
          },
        ]}
      />
    </ColorModeContextProvider>
  );
}

export default App;
