DROP KEYSPACE IF EXISTS morePlaceToStay;

CREATE KEYSPACE morePlaceToStay
             WITH replication = {'class':'SimpleStrategy', 'replication_factor': 1};

USE morePlaceToStay;


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
  PRIMARY KEY (id, location)
) WITH CLUSTERING ORDER BY (location DESC);

CREATE TABLE similiar_properties_by_id (
  main_id int ,
  similiar_id int,
  PRIMARY KEY (main_id, similiar_id)
);

CREATE TABLE saved_list (
  id int,
  list_name text,
  pop_id int,
  PRIMARY KEY (list_name,list_name,pop_id)
);



COPY properties from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/propertyCassandraFinal1.csv' WITH HEADER=true and DELIMITER=';' AND CHUNKSIZE=500 AND NUMPROCESSES=4;

COPY properties from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/propertyCassandraFinal2.csv' WITH HEADER=true and DELIMITER=';' AND CHUNKSIZE=500 AND NUMPROCESSES=4;

COPY similiar_properties_by_id from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/SimCassandra.csv' WITH HEADER=true and DELIMITER=';' AND CHUNKSIZE=1000 AND NUMPROCESSES=4;

COPY saved_list from '/Users/michaelwu/Desktop/Hrsf129/SDC/More-places-to-stay-carousel/seeder/cassandra_list.csv' WITH HEADER=true and DELIMITER=';' AND CHUNKSIZE=1000 AND NUMPROCESSES=4;