"use client";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

interface CounterProps {
  end?: number;
  decimals?: number;
  extraClass?: string;
}

const Counter = ({ end, decimals, extraClass }: CounterProps) => {
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => (
        <ReactVisibilitySensor onChange={start} delayedCall>
          <span
            className={`counter ${extraClass}`}
            data-from="0"
            data-to={end}
            ref={countUpRef}
          >
            count
          </span>
        </ReactVisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
