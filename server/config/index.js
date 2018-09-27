'use strict';

const config = {
  port: process.env.PORT || 8000,
};

if (process.env.NODE_ENV === 'test') {
  config.port = process.env.PORT_TEST;
} else if (process.env.NODE_ENV === 'development') {
  config.port = process.env.PORT_DEV;
}

module.exports = config;
