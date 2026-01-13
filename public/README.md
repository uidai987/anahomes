# BuildCraft Construction Website

A complete construction company website with HTML, CSS, JavaScript frontend and PHP/MySQL backend.

## Features

### Frontend
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Slider**: Auto-sliding services section with manual controls
- **Testimonials Slider**: Customer testimonials with rating display
- **Portfolio Gallery**: Filter by category and tags, search functionality
- **Contact Form**: With validation and thank-you popup
- **Enquiry Modal**: Responsive modal form accessible from multiple buttons
- **Smooth Navigation**: Sticky header with scroll effects

### Pages
1. **Home (index.html)**: Main landing page with all sections
2. **About (about.html)**: Detailed company information
3. **Portfolio (portfolio.html)**: Complete project gallery with filtering

### Admin Dashboard
- Dashboard with statistics overview
- Inquiry management (view, approve, delete)
- Services management (CRUD)
- Portfolio management (CRUD)
- Testimonials management (CRUD)
- Admin user management with registration

## Setup Instructions

### 1. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE buildcraft_db;
```

2. Import the database schema:
```bash
mysql -u your_username -p buildcraft_db < api/database.sql
```

Or run the SQL file through phpMyAdmin.

### 2. Configuration

Edit `api/config.php` with your database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
define('DB_NAME', 'buildcraft_db');
```

### 3. Running Locally

#### Using PHP Built-in Server:
```bash
cd public
php -S localhost:8000
```

#### Using XAMPP/WAMP/MAMP:
1. Copy the `public` folder contents to your `htdocs` or `www` directory
2. Access via `http://localhost/buildcraft` (or your configured path)

### 4. Admin Access

- URL: `http://localhost:8000/admin/login.html`
- Default Credentials:
  - Email: `admin@buildcraft.com`
  - Password: `admin123`

## File Structure

```
public/
├── index.html              # Home page
├── about.html              # About page
├── portfolio.html          # Portfolio page
├── css/
│   ├── style.css          # Main styles
│   ├── about.css          # About page styles
│   └── portfolio.css      # Portfolio page styles
├── js/
│   ├── main.js            # Main JavaScript
│   └── portfolio.js       # Portfolio page JavaScript
├── admin/
│   ├── index.html         # Admin dashboard
│   ├── login.html         # Admin login
│   ├── css/
│   │   └── admin.css      # Admin styles
│   └── js/
│       └── admin.js       # Admin JavaScript
└── api/
    ├── config.php         # Database configuration
    ├── database.sql       # Database schema
    ├── submit_enquiry.php # Enquiry submission
    ├── submit_contact.php # Contact form submission
    ├── get_services.php   # Get services
    ├── get_portfolio.php  # Get portfolio items
    ├── get_testimonials.php # Get testimonials
    └── admin/
        ├── login.php      # Admin login API
        ├── dashboard.php  # Dashboard stats
        ├── inquiries.php  # Inquiries CRUD
        ├── services.php   # Services CRUD
        ├── portfolio.php  # Portfolio CRUD
        ├── testimonials.php # Testimonials CRUD
        └── admins.php     # Admin users CRUD
```

## API Endpoints

### Public APIs
- `GET /api/get_services.php` - Get active services
- `GET /api/get_portfolio.php` - Get portfolio items
- `GET /api/get_testimonials.php` - Get testimonials
- `POST /api/submit_enquiry.php` - Submit enquiry form
- `POST /api/submit_contact.php` - Submit contact form

### Admin APIs
- `POST /api/admin/login.php` - Admin login
- `GET /api/admin/dashboard.php` - Dashboard statistics
- `GET|PUT|DELETE /api/admin/inquiries.php` - Manage inquiries
- `GET|POST|PUT|DELETE /api/admin/services.php` - Manage services
- `GET|POST|PUT|DELETE /api/admin/portfolio.php` - Manage portfolio
- `GET|POST|PUT|DELETE /api/admin/testimonials.php` - Manage testimonials
- `GET|POST|PUT|DELETE /api/admin/admins.php` - Manage admin users

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins)
- **Backend**: PHP 7.4+
- **Database**: MySQL 5.7+

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (partial support)

## License

MIT License - Feel free to use this for your projects.
