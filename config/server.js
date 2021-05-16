module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    url: "/",
    serveAdminPanel: false,
    // auth: {
    //   secret: env("ADMIN_JWT_SECRET", "a4936c9be4f9c792e2b6b59ef2bbe4e7"),
    // },
  },
});
