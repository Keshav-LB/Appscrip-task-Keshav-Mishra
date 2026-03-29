"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const filterSections = [
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

const idealForOptions = ["Men", "Women", "Baby & Kids"];

export default function FilterSidebar() {
  const [idealForOpen, setIdealForOpen] = useState(true);

  return (
    <aside className="filter-sidebar">
      <label className="filter-sidebar__customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      <div className="filter-sidebar__section filter-sidebar__section--expanded">
        <button
          type="button"
          className="filter-sidebar__section-head filter-sidebar__section-head--button"
          onClick={() => setIdealForOpen((prev) => !prev)}
          aria-expanded={idealForOpen}
        >
          <span>IDEAL FOR</span>
          <ChevronDown
            size={16}
            strokeWidth={1.7}
            className={idealForOpen ? "filter-sidebar__chevron--open" : ""}
          />
        </button>

        <p className="filter-sidebar__summary">All</p>

        {idealForOpen && (
          <div className="filter-sidebar__values">
            <button type="button" className="filter-sidebar__unselect">
              Unselect all
            </button>

            {idealForOptions.map((item) => (
              <label className="filter-sidebar__value" key={item}>
                <input type="checkbox" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {filterSections.map((section) => (
        <div className="filter-sidebar__section" key={section}>
          <button
            type="button"
            className="filter-sidebar__section-head filter-sidebar__section-head--button"
          >
            <span>{section}</span>
            <ChevronDown size={16} strokeWidth={1.7} />
          </button>
          <p className="filter-sidebar__summary">All</p>
        </div>
      ))}
    </aside>
  );
}