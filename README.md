# The Dragon's Hoard

A responsive, frontend-only fantasy tabletop e-commerce demo for D&D books, miniatures, battle maps, and polyhedral dice. Built as an academic BSIT project using HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, Bootstrap Icons, and browser LocalStorage.

## Student
- **Name:** Rhenstan B. Cataquian
- **Course:** BSIT
- **Section:** BSIT-2B

## Target users and objectives
Designed for D&D players, collectors, beginners, and Dungeon Masters. The project demonstrates a polished storefront, product discovery, product details, cart and wishlist workflows, simulated checkout, and client-side form validation without a backend.

## Main features
- Responsive home page with category links, featured items, promotion, and newsletter demo.
- Shop catalog with 20 sample products, text search, category and price filters, sorting, ratings, and stock labels.
- Product detail page loaded by product ID in the URL.
- Cart with quantity editing, removal, subtotal, shipping, and total calculations.
- Wishlist with persistent saved items.
- Checkout validation and simulated order confirmation with a random order number.
- Contact form validation and browser-only message storage.
- Bootstrap toast notifications and dynamic cart/wishlist counters.
- Local SVG artwork included for the logo, hero banner, and product imagery.

## Technologies
- HTML5 and CSS3
- Vanilla JavaScript
- Bootstrap 5.3.3 and Bootstrap Icons (CDN)
- Browser LocalStorage

## How to open and use
1. Extract `the-dragons-hoard.zip`.
2. Open the `The-Dragons-Hoard` folder.
3. Double-click `index.html` to open the home page in a modern browser.
4. Use **Shop** to search/filter products and open product details.
5. Add products to the cart or wishlist. Refreshing the page should retain those browser-stored selections.
6. Proceed to checkout and submit the sample form to create a simulated order.
7. Cart, wishlist, demo orders, newsletter signups, and contact messages are stored only in the browser's LocalStorage.

**Offline note:** The included artwork and application code are local. Bootstrap CSS/JS and Bootstrap Icons are loaded from jsDelivr CDN, so the full styling and icon set require an internet connection. For a fully offline deployment, download those library files and update the references to local copies.

## AI tools used
- **ChatGPT:** Assisted with project structure, sample product data, UI copy, CSS styling, JavaScript interaction logic, and this documentation. The generated project should be reviewed and adapted by the student.

## Testing performed and corrections made
- The project structure and page-to-asset relative paths were generated consistently for the root home page and nested pages.
- JavaScript behavior is implemented around shared LocalStorage keys (`tdh_cart`, `tdh_wishlist`, `tdh_orders`, `tdh_subscribers`, and `tdh_contact_messages`).
- Product artwork is stored as local SVG files to avoid broken third-party image URLs.
- Forms use native constraints plus Bootstrap validation feedback.
- **Not claimed:** No real payment processing, server submission, database persistence, or automated cross-browser/device test suite is included. Verify behavior in your own target browsers and record any additional manual test results before submission.

## Known limitations
- Frontend only. LocalStorage is device/browser-specific and can be cleared by the user.
- No user accounts, inventory synchronization, backend order fulfillment, email sending, or real payment processing.
- Bootstrap and Bootstrap Icons are CDN dependencies.
- Product photos are original illustrative SVG placeholders rather than commercial product photography.
- Shipping is a simple demo rule: free at ₱2,500; otherwise ₱120.

## Credits
- Bootstrap 5 and Bootstrap Icons: https://getbootstrap.com/ and https://icons.getbootstrap.com/
- Original generated SVG illustrations and sample catalog content created for this academic demo.
- Dungeons & Dragons is a trademark of its respective owner. This concept project is unofficial and not affiliated with Wizards of the Coast.
