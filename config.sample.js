module.exports = {
    FB_PAGE_TOKEN: process.env.FB_PAGE_TOKEN,
    FB_VERIFY_TOKEN: process.env.FB_VERIFY_TOKEN,
    FB_APP_SECRET: process.env.FB_APP_SECRET,
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_PROJECT_ID: process.env.GOOGLE_PROJECT_ID,
    DF_LANGUAGE_CODE: process.env.DF_LANGUAGE_CODE,
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: JSON.parse(process.env.GOOGLE_PRIVATE_KEY)
    PG_CONFIG_USER: process.env.PG_CONFIG_USER,
    PG_CONFIG_DATABASE: process.env.PG_CONFIG_DATABASE,
    PG_CONFIG_PASSWORD: process.env.PG_CONFIG_PASSWORD,
    PG_CONFIG_HOST: process.env.PG_CONFIG_HOST,
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000,
};