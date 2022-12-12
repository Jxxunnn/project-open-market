import { API_END_POINT } from "../../utils/api.js";
import Content from "./Content.js";
import Price from "./Price.js";

export default function Contents({ $target, initialState }) {
  this.state = initialState;

  this.setStatae = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const content = new Content({ $target, initialState });
    const price = new Price({ $target, initialState });
  };
  this.render();
}
