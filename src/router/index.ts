import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

//defining routes
/* 
    first: import RouteRecordRaw interfaces and after type the routes variable as array of RouteRecordRaw
    second: create an object with the next properties 
    third: create a router with method createRouter({ history:createWebHistory}) and pass the previous method 
*/
const routes: RouteRecordRaw[] = [
  {
    path: "/", //initial route
    alias: "/tasks", // alias for a path
    name: "tasks", //route's name
    component: () => import("@/components/TaskList.vue"), // component that should be rendered in that route
  },
  {
    path: "/tasks/new", //initial route
    name: "tasks-new", //route's name
    component: () => import("@/components/TaskForm.vue"), // component that should be rendered in that route
  },
  {
    path: "/tasks/:id", //initial route
    name: "tasks-details", //route's name
    component: () => import("@/components/TaskDetails.vue"), // component that should be rendered in that route
  },
  {
    path: "/tasks/update/:id",
    name: "update-task",
    component: () => import("@/components/TaskForm.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
