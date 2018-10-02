'use strict';
const request = require('request');
const config = require('./config.sample');
const pg = require('pg');
pg.defaults.ssl = true;
module.exports = {
    readAllJob: function(callback) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            client
                .query(
                    'SELECT job FROM public.all_job',
                    function(err, result) {
                        if (err) {
                            console.log(err);
                            callback([]);
                        } else {
                            let job = [];
                            for (let i = 0; i < result.rows.length; i++) {
                                job.push(result.rows[i]['job']);
                            }
                            callback(job);
                        };
                    });
        });
        pool.end();
    },
    readUserColor: function(callback, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            client
                .query(
                    'SELECT color FROM public.users WHERE fb_id=$1',
                    [userId],
                    function(err, result) {
                        if (err) {
                            console.log(err);
                            callback('');
                        } else {
                            callback(result.rows[0]['color']);
                        };
                    });
        });
        pool.end();
    },
    updateUserColor: function(color, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET color=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    color,
                    userId
                ]);
        });
        pool.end();
    },
    updateJobVacancy: function(job_vacancy, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET job_vacancy=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    job_vacancy,
                    userId
                ]);
        });
        pool.end();
    },
    updateUserName: function(first_name, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET first_name=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    first_name,
                    userId
                ]);
        });
        pool.end();
    },
    updateUserLastname: function(last_name, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET last_name=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    last_name,
                    userId
                ]);
        });
        pool.end();
    },
    updatePreviousJob: function(previous_job, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET previous_job=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    previous_job,
                    userId
                ]);
        });
        pool.end();
    },
    updateYearsOfExperience: function(years_of_experience, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET years_of_experience=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    years_of_experience,
                    userId
                ]);
        });
        pool.end();
    },
    updatePhoneNumber: function(phone_number, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET phone_number=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    phone_number,
                    userId
                ]);
        });
        pool.end();
    },
    updateCVFile: function(cv_file, userId) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }
            let sql = 'UPDATE public.users SET cv_file=$1 WHERE fb_id=$2';
            client.query(sql,
                [
                    cv_file,
                    userId
                ]);
        });
        pool.end();
    }
}
