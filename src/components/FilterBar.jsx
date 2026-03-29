import { ChevronLeft, ChevronDown } from "lucide-react";

export default function FilterBar({ showFilters, onToggleFilters }) {
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

        <button className="filter-bar__sort" type="button">
          <span>RECOMMENDED</span>
          <ChevronDown size={16} strokeWidth={1.7} />
        </button>
      </div>
    </section>
  );
}