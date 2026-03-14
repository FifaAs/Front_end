import { useState, useCallback, memo } from "react";
import { Button } from "./Button";

const StatusDisplay = memo(function StatusDisplay({ count }: { count: number }) {
  console.log("🔵 StatusDisplay render");
  return (
    <div className="status-display">
      <span className="status-display__label">Count</span>
      <span className="status-display__value">{count}</span>
    </div>
  );
});

export function ParentComponent() {
  console.log("🔴 ParentComponent render");

  const [count, setCount]       = useState(0);
  const [otherState, setOther]  = useState(0);


  // Empty dep array → same reference for the entire lifetime of the component
  const handleClick = useCallback(() => {
    console.log("✅ handleClick — stable reference, Button won't re-render");
  }, []);

  // Empty dep array is safe here because setCount (from useState) is stable
  const handleIncrement = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // Separate action to prove: changing otherState re-renders Parent,
  // but Buttons do NOT re-render thanks to useCallback + memo
  const handleOther = useCallback(() => {
    setOther((n) => n + 1);
  }, []);

  return (
    <div className="parent-component">
      <h2 className="parent-component__title">useCallback Demo</h2>

      <StatusDisplay count={count} />

      <p className="parent-component__sub">
        Other state: <strong>{otherState}</strong>
        <span className="parent-component__hint">
          (changing this re-renders Parent but NOT the Buttons ✅)
        </span>
      </p>

      <div className="parent-component__actions">
        {/*
         * These Buttons are wrapped in memo().
         * Because handleClick / handleIncrement are stable (useCallback),
         * they will NOT re-render when otherState changes.
         *
         * Watch DevTools console:
         *  - Click "Change Other" → ParentComponent re-renders, Buttons DON'T
         *  - Remove useCallback → every click re-renders all Buttons
         */}
        <Button onClick={handleClick}     label="Log Click"    variant="secondary" />
        <Button onClick={handleIncrement} label="Increment"    variant="primary"   />
        <Button onClick={handleOther}     label="Change Other" variant="secondary" />
      </div>

      <div className="parent-component__guide">
        <h3>📋 How to verify in DevTools</h3>
        <ol>
          <li>
            Open <strong>DevTools → Console</strong>
          </li>
          <li>
            Click <strong>"Change Other"</strong> — see{" "}
            <code>ParentComponent render</code> but{" "}
            <strong>no</strong> Button renders
          </li>
          <li>
            Comment out <code>useCallback</code>, replace with plain{" "}
            <code>const handleClick = () =&gt; ...</code>
          </li>
          <li>
            Click again — now all Buttons log their render on every click
          </li>
          <li>
            Open <strong>React DevTools → Profiler</strong>, record, click
            both buttons, and compare highlighted re-renders
          </li>
        </ol>
      </div>
    </div>
  );
}