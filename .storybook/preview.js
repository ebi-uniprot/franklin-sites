import React from "react"; // Still needed for deployed storybook to work
import StoryRouter from "storybook-react-router";

import franklinTheme from "./franklin-theme";

import "../src/styles/index.scss";

export const parameters = {
  docs: {
    theme: franklinTheme,
  },
  options: {
    storySort: {
      method: 'alphabetical'
    }}
};

export const decorators = [
  StoryRouter(),
  (storyFn) => (
    <div
      style={{
        padding: "2rem 10rem",
      }}
    >
      {storyFn()}
    </div>
  ),
];
