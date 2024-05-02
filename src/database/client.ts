import pkg from 'pg';

const client = new pkg.Pool({
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT || '5432'),
    database: process.env.POSTGRES_DB || '',
    user: process.env.POSTGRES_USER || '',
    password: process.env.POSTGRES_PWD || '',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    ssl: true
});