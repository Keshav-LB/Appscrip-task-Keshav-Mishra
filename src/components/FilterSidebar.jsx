import { ChevronDown } from "lucide-react";

const filterSections = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function FilterSidebar() {
  return (
    <aside className="filter-sidebar">
      <label className="filter-sidebar__customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      {filterSections.map((section) => (
        <div className="filter-sidebar__section" key={section}>
          <div className="filter-sidebar__section-head">
            <span>{section}</span>
            <ChevronDown size={16} strokeWidth={1.7} />
          </div>
          <p>All</p>
        </div>
      ))}
    </aside>
  );
}