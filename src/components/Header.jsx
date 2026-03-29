import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <div className="top-strip__item">
          <span className="top-strip__mark">◫</span>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="top-strip__item">
          <span className="top-strip__mark">◫</span>
          <span>Lorem ipsum dolor</span>
        </div>
        <div className="top-strip__item">
          <span className="top-strip__mark">◫</span>
          <span>Lorem ipsum dolor</span>
        </div>
      </div>

      <div className="header-main page-section">
        <div className="container header-main__inner">
          <div className="header-main__left">
            <div className="brand-logo-box">
              <div className="brand-logo-inner" />
            </div>
          </div>

          <div className="header-main__logo">LOGO</div>

          <div className="header-main__right">
            <Search size={22} strokeWidth={1.7} />
            <Heart size={22} strokeWidth={1.7} />
            <ShoppingBag size={22} strokeWidth={1.7} />
            <User size={22} strokeWidth={1.7} />
            <div className="header-lang">
              <span>ENG</span>
              <ChevronDown size={16} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>

      <nav className="header-nav page-section">
        <div className="container header-nav__inner">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </div>
      </nav>
    </header>
  );
}