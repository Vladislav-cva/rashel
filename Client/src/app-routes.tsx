import { ExampleRoutes } from "features/auth";
import { ContentsRoutes } from "features/contents";
import React from "react";
import { Redirect } from "react-router";

export const AppRoutes = [
  ...ExampleRoutes,
  ...ContentsRoutes,
  <Redirect
    key="main-home-page"
    from="/"
    to="/main"
  />,
];
