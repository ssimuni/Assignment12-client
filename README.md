# Read&Digest

Read&Digest is a comprehensive news website where users can read, write, and manage articles. The site features trending articles, publisher management, user statistics, and subscription-based premium content.

## Live Site URL
 [https://assignment12-fbe3f.web.app/]

## Admin Credentials
- **email:** saymasimu15@gmail.com
- **Password:** 1234Ab!0

## Features
1. **Home Page:**
   - **Navbar:** Includes links to Home, Add Articles, All Articles, Subscription, My Articles, Dashboard (admin only), Premium Articles (subscribed users only), and user profile.
   - **Trending Articles Slider:** Displays the top 6 trending articles based on view count.
   - **All Publishers:** Lists all publishers added by the admin.
   - **Statistics Section:** Displays counts of all users, normal users, and premium users using react-countup.
   - **Plans Section:** Shows features for free and premium users, with a link to the subscription page.
   - **Footer:** Basic footer with relevant links and information.
   - **Additional Sections:** Unique sections to enhance the website's appeal.

2. **Authentication:**
   - **Conditional Navbar Links:** Shows Login/Register buttons if the user is not logged in, or profile picture and logout button if logged in.
   - **Profile Picture:** Clicking the user photo navigates to the user's profile.

3. **Article Management:**
   - **Add Article Page (Private):** Form to submit new articles with title, image, publisher, tags, and description.
   - **All Articles Page:** Displays all approved articles with filters for publisher and tags, and search functionality.
   - **Article Details Page (Private):** Shows detailed article information and increments view count.

4. **Subscription Management:**
   - **Subscription Page (Private):** Allows users to choose a subscription plan, with options for different durations and prices.
   - **Payment Integration:** Users can make payments to subscribe using Stripe.
   - **Premium Content:** Premium articles are accessible only to subscribed users.

5. **Admin Dashboard:**
   - **Sidebar Navigation:** Links to All Users, All Articles, and Add Publisher pages.
   - **Dynamic Charts:** Displays publication statistics using react-google-charts.
   - **User Management:** List of all users with options to make admin.
   - **Article Management:** Approve, decline, delete, and make articles premium.
   - **Publisher Management:** Add new publishers with name and logo.

6. **User Profile:**
   - **Profile Page (Private):** Shows and allows updating user information.

7. **User Articles:**
   - **My Articles Page (Private):** Lists the current user's articles with options to view details, update, delete, and check status.

## Setup Instructions
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/newsportal.git
   cd newsportal
