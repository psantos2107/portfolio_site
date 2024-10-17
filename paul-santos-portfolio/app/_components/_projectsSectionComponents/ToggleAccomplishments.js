"use client";

import { useState } from "react";

function ToggleAccomplishments({ accomplishments, backgroundColor }) {
  const [showAccomplishments, setShowAccomplishments] = useState(false);

  function handleToggleAccomplishments(e) {
    e.preventDefault();
    setShowAccomplishments(() => !showAccomplishments);
  }

  return (
    <article className="flex flex-col justify-center items-center gap-2">
      <button
        onClick={handleToggleAccomplishments}
        className={`${backgroundColor} p-1 ${
          showAccomplishments ? "mb-2" : "mb-4"
        } hover-link`}
      >
        {`${showAccomplishments ? "Hide " : "Show "}`} Accomplishments
      </button>
      {showAccomplishments && (
        <ul className="list-disc pl-3 mb-3 flex flex-col gap-2 md:leading-8 ">
          {accomplishments.map((accomplishment) => {
            return <li key={accomplishment}>{accomplishment}</li>;
          })}
        </ul>
      )}
    </article>
  );
}

export default ToggleAccomplishments;
