module.exports = {
  apps: [{
    name: 'car-booking-app',
    script: './server/server.js',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};