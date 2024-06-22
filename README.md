MyAwesomeWebsite
Admin Email: saymasimu15@gmail.com
Admin Password: 1234Ab
Live Site URL: [Your_Live_Site_URL]

Overview
MyAwesomeWebsite is a web application built with React, Node.js, Express, MongoDB, and integrates Stripe for payments. It provides a platform where users can read, publish, and manage articles. Admins have additional functionalities for managing users, articles, and publishers.

Key Features
User Authentication: Users can register, login, update profile, and logout. Conditional rendering of components based on user authentication status.
Article Management: Users can add articles, view all articles (public and premium), view article details, and update/delete their own articles.
Premium Subscription: Users can subscribe for a premium membership, which grants access to premium articles. Subscription period choices (1 minute, 5 days, 10 days) available.
Dashboard for Admins: Admins have access to a dashboard with various functionalities:
View all users and convert them to admins.
View all articles, approve or decline articles, make articles premium.
Add publishers.
Charts and Statistics: Visual representation of data using React-Google-Charts:
Pie chart showing publication percentages.
Additional static charts (e.g., bar chart, line chart) displaying relevant statistics.
Dynamic UI Elements: Conditional rendering based on user roles (admin, premium user).
Responsive Design: UI is optimized for various screen sizes and devices.
Image Upload: Integration with ImgBB or Cloudinary for uploading article images and publisher logos.
Search and Filtering: Users can search articles by title and filter by publisher and tags.
Interactive Components: Use of sliders (e.g., trending articles), buttons (e.g., navigate to subscription page), and modals (e.g., show decline reasons).
