import React from "react";

const items = [
  "Website development",
  "Local SEO",
  "Google Business Profile",
  "Social media",
  "Paid advertising",
  "Photo & video",
  "Content systems",
  "Campaign reporting",
];

export default function Ticker() {
  return (
    <div className="ticker" aria-label="Boostech capabilities">
      <div className="ticker-track">
        {[0, 1].map((group) => (
          <div className="ticker-group" key={group} aria-hidden={group === 1}>
            {items.map((item) => (
              <span className="ticker-item" key={`${group}-${item}`}>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
