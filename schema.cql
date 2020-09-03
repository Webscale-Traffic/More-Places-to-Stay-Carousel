DROP KEYSPACE IF EXISTS more_places_to_stay;

CREATE KEYSPACE more_places_to_stay
             WITH replication = {'class':'SimpleStrategy', 'replication_factor': 2};

USE more_places_to_stay;

CREATE TYPE property (
  id int,
  location text,
  description text,
  images text,
  number_of_reviews smallint,
  rate text,
  ratings decimal,
  superhost boolean,
  title text
);

CREATE TABLE properties (
  id int,
  location text,
  title text,
  images text,
  description text,
  rate text,
  ratings decimal,
  number_of_reviews smallint,
  superhost boolean,
  similiar_properties list<frozen<property>>,
  PRIMARY KEY (id, location)
);

CREATE TABLE saved_list (
  list_name text,
  property map<text,text>,
  PRIMARY KEY (list_name)
);

COPY properties from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/propertyCassandra.csv' WITH HEADER=true and DELIMITER=';';
WITH MINBATCHSIZE=1 AND MAXBATCHSIZE=1 AND PAGESIZE=10;
