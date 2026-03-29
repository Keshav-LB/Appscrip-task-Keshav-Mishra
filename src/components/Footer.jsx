export default function Footer() {
  return (
    <footer className="site-footer page-section">
      <div className="container site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__newsletter">
            <h2>BE THE FIRST TO KNOW</h2>
            <p>Sign up for updates from mettā muse.</p>

            <form className="site-footer__subscribe" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="samalex@mail.com"
                aria-label="Enter your email"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>

          <div className="site-footer__contact-wrap">
            <div className="site-footer__contact">
              <h2>CONTACT US</h2>
              <p>+44 221 133 5360</p>
              <p>customercare@mettamuse.com</p>
            </div>

            <div className="site-footer__currency">
              <h2>CURRENCY</h2>

              <div className="site-footer__currency-row">
                <span className="site-footer__flag" aria-hidden="true">🇺🇸</span>
                <span className="site-footer__dot" aria-hidden="true">•</span>
                <span className="site-footer__currency-code">USD</span>
              </div>

              <p className="site-footer__currency-note">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <div className="site-footer__divider" />

        <div className="site-footer__bottom-grid">
          <div className="site-footer__column">
            <h3>mettā muse</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>

          <div className="site-footer__column">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="site-footer__column site-footer__column--right">
            <div className="site-footer__social-block">
              <h3>FOLLOW US</h3>
              <div className="site-footer__socials">
                <a href="#" aria-label="Instagram" className="site-footer__social-icon">ig</a>
                <a href="#" aria-label="LinkedIn" className="site-footer__social-icon">in</a>
              </div>
            </div>

            <div className="site-footer__payments-block">
              <h3>mettā muse ACCEPTS</h3>
              <div className="site-footer__payments">
                <span className="pay-card">G Pay</span>
                <span className="pay-card">MC</span>
                <span className="pay-card">PayPal</span>
                <span className="pay-card pay-card--blue">AMEX</span>
                <span className="pay-card"> Pay</span>
                <span className="pay-card pay-card--purple">Shop</span>
              </div>
            </div>
          </div>
        </div>

        <p className="site-footer__copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </footer>
  );
}