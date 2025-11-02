  // const db = require('./db/db');

  // db.query('SELECT 1', (err, results) => {
  //   if (err) {
  //     console.error('Database connection test failed:', err);
  //   } else {
  //     console.log('Database connection test successful:', results);
  //   }
  //   db.end(); // Close the connection
  // });

  // test-db.js
const assert = require('assert');
const db = require('./db/db');

describe('Database Connection Test', function () {
  it('should connect to the database successfully', function (done) {
    db.query('SELECT 1', (err, results) => {
      if (err) return done(err);

      try {
        assert.ok(results.length >= 0, 'Query returned results');
        done();
      } catch (assertErr) {
        done(assertErr);
      } finally {
        db.end();
      }
    });
  });
});
