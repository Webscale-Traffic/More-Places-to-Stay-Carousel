DROP KEYSPACE IF EXISTS test;

CREATE KEYSPACE test
             WITH replication = {'class':'SimpleStrategy', 'replication_factor': 1};

USE test;

CREATE TYPE property (
  id int,
  location text
);

CREATE TABLE properties (
  id int,
  location text,
  -- rate text,
  sim list<frozen<property>>,
  PRIMARY KEY (id)
);


COPY properties  from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/test.csv' WITH  DELIMITER=';' AND HEADER=true;
