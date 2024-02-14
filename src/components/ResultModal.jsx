import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import {} from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onModalClose },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the time with <strong>{formattedRemainingTime}</strong>{" "}
        seconds left.
      </p>
      <form action="dialog">
        <button onClick={onModalClose}>Close</button>
      </form>
    </dialog>,

    document.getElementById("modal")
  );
});

export default ResultModal;
