import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";

const SlidingContainer = ({ children, slideElementKey }) => {
  console.log(`Rendering with key ${slideElementKey}`);
  return (
    <TransitionGroup className="container">
      <CSSTransition
        classNames={{
          enter: "node-enter",
          enterActive: "node-enter-active",
          exit: "node-exit",
          exitActive: "node-exit-active"
        }}
        key={slideElementKey}
        timeout={2000}
      >
        <div className="node">{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default function App() {
  const [index, setIndex] = React.useState(0);
  return (
    <div>
      <SlidingContainer slideElementKey={index}>
        <div
          style={{ background: index % 2 === 0 ? "red" : "blue", height: 200 }}
        >
          {index}
        </div>
      </SlidingContainer>
      <button onClick={() => setIndex(index + 1)}>Increment</button>
    </div>
  );
}
