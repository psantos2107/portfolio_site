"use client";

import { useState } from "react";

function ToggleAccomplishments({ accomplishments }) {
  const [showAccomplishments, setShowAccomplishments] = useState(false);

  function handleToggleAccomplishments(e) {
    e.preventDefault();
    setShowAccomplishments(() => !showAccomplishments);
  }

  return (
    <article className="flex flex-col justify-center items-center">
      <button
        onClick={handleToggleAccomplishments}
        className="bg-blue-100 p-1 mb-2"
      >
        {`${showAccomplishments ? "Hide " : "Show "}`} Accomplishments
      </button>
      {showAccomplishments && (
        <ul className="list-disc pl-3 mb-3">
          {accomplishments.map((accomplishment) => {
            return <li>{accomplishment}</li>;
          })}
        </ul>
      )}
    </article>
  );
}

export default ToggleAccomplishments;
