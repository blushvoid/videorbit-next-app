import { createRef } from "react";

const scrollState = {
  sections: 4,
  pages: 4,
  zoom: 1,
  top: createRef(),
};

export default scrollState;