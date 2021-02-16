
CREATE TABLE IF NOT EXISTS login_data (
    user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_metadata (
    user_id UUID REFERENCES login_data (user_id),
    email TEXT UNIQUE NOT NULL,
    joined TIMESTAMP NOT NULL
);


CREATE TABLE IF NOT EXISTS stats (
    user_id UUID REFERENCES login_data (user_id),
    health_points DOUBLE PRECISION DEFAULT 10.0,
    max_health_points DOUBLE PRECISION DEFAULT 10.0,
    action_points DOUBLE PRECISION DEFAULT 10.0,
    max_action_points DOUBLE PRECISION DEFAULT 10.0,
    experience_points BIGINT DEFAULT 0,
    pocket BIGINT DEFAULT 0,
    vault BIGINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS user_location_data (
    user_id UUID REFERENCES login_data (user_id),
    zone_id SMALLINT DEFAULT 1
);

CREATE TYPE house_t AS enum('Gryffindor', 'Ravenclaw', 'Hufflepuff', 'Slytherin');

CREATE TABLE IF NOT EXISTS character_bio (
    user_id UUID REFERENCES login_data (user_id),
    house house_t NOT NULL
);

CREATE TABLE IF NOT EXISTS house_tasks (
    user_id UUID REFERENCES login_data (user_id),
    bathroom BOOL DEFAULT FALSE,
    livingroom BOOL DEFAULT FALSE,
    garden BOOL DEFAULT FALSE,
    frontdoor BOOL DEFAULT FALSE,
    trunk BOOL DEFAULT FALSE,
    cleanroom BOOL DEFAULT FALSE,
    packtrunk BOOL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS sorting (
    user_id UUID REFERENCES login_data (user_id),
    gryff SMALLINT DEFAULT 0,
    rav SMALLINT DEFAULT 0,
    huff SMALLINT DEFAULT 0,
    slyth SMALLINT DEFAULT 0
);

CREATE TABLE IF NOT EXISTS regeneration(
    user_id UUID REFERENCES login_data (user_id)
);