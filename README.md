# CRM System - Version 5

An experimental CRM system exploring Nuxt.js-inspired architecture with Inertia.js and a simplified customer management model.

## Description

Version 5 represents an experimental phase, exploring alternative frontend architectures. This version is based on the Lirnui starter template and introduces a simplified Customer model while experimenting with different UI patterns. It maintains Inertia.js but with a lighter, more experimental approach to data management.

## Tech Stack

- **Backend**: Laravel 11.9 (PHP 8.2+)
- **Frontend**: Inertia.js 1.3 (with experimental patterns)
- **Styling**: Tailwind CSS 3.4
- **Routing**: Ziggy 2.3 (Laravel routes in JavaScript)
- **Build Tool**: Vite 5
- **Package Manager**: Bun (in addition to npm)
- **Database**: SQLite/MySQL/PostgreSQL support

## Key Features

- **Simplified Customer Model**: Streamlined customer management
- **Experimental Architecture**: Testing new patterns for Laravel + Inertia.js
- **Lightweight**: Minimal dependencies for faster performance
- **Modern Tooling**: Bun package manager support
- **Clean UI**: Minimalist Tailwind-based design

## Data Models

- **User**: Authentication and user management
- **Customer**: Simplified customer records

## Installation

1. Clone the repository:
```bash
git clone https://github.com/stukenov/crm-v5.git
cd crm-v5
```

2. Install dependencies (with npm or bun):
```bash
composer install
npm install
# or
bun install
```

3. Setup environment:
```bash
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
```

4. Initialize database:
```bash
php artisan migrate
```

5. Build and serve:
```bash
npm run build
php artisan serve
```

## Development

For development with hot module replacement:

```bash
npm run dev
# or
bun run dev
```

In a separate terminal:
```bash
php artisan serve
```

## Architecture

This version experiments with:
- Nuxt.js-inspired patterns in Laravel
- Simplified data models
- Alternative state management approaches
- Minimal frontend dependencies
- Bun as a faster package manager option

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Saken Tukenov

## Development Timeline

This is Version 5 (September 2024) - Experimental release testing new architectural patterns with simplified models.
