import Login from "../components/auth/login";
import DeviceList from "../components/device/deviceList";

const authRoutes = [
  { 
    path: "/", 
    component: Login,
  },
  { 
    path: "login", 
    component: Login,
  }
];

const privateRoutes = [
  { 
    path: "device", 
    component: DeviceList,
    auth: ["admin", "general"],
  }
];

export { privateRoutes , authRoutes };
