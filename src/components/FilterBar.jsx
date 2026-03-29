"use client";

import { useState } from "react";
import { ChevronLeft, ChevronDown, Check } from "lucide-react";

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export default function FilterBar({ showFilters, onToggleFilters }) {
  const [sortOpen, setSortOpen] = useState(true);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSortOpen(false);
  };

  return (
    <section className="page-section">
      <div className="container filter-bar">
        <div className="filter-bar__left">
          <span className="filter-bar__count">3425 ITEMS</span>

          <button
            className="filter-bar__toggle"
            type="button"
            onClick={onToggleFilters}
          >
            <ChevronLeft
              size={16}
              strokeWidth={1.7}
              className={!showFilters ? "filter-bar__toggle-icon--rotated" : ""}
            />
            <span>{showFilters ? "HIDE FILTER" : "SHOW FILTER"}</span>
          </button>
        </div>

        <div className="filter-bar__sort-wrap">
          <button
            className="filter-bar__sort"
            type="button"
            onClick={() => setSortOpen((prev) => !prev)}
            aria-expanded={sortOpen}
          >
            <span>{selectedSort}</span>
            <ChevronDown
              size={16}
              strokeWidth={1.7}
              className={sortOpen ? "filter-bar__sort-icon--open" : ""}
            />
          </button>

          {sortOpen && (
            <div className="filter-bar__dropdown">
              {sortOptions.map((option) => {
                const isActive = option === selectedSort;

                return (
                  <button
                    key={option}
                    type="button"
                    className={`filter-bar__dropdown-item ${
                      isActive ? "filter-bar__dropdown-item--active" : ""
                    }`}
                    onClick={() => handleSortSelect(option)}
                  >
                    <span className="filter-bar__dropdown-check">
                      {isActive ? <Check size={18} strokeWidth={2.4} /> : null}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}