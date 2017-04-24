first_name       last_name        home
---------------  ---------------  --------------------
rose             tyler            earth
zoe              heriot           space station w3
jo               grant            earth
leela            NULL             unspecified         
romana           NULL             gallifrey
clara            oswald           earth
adric            NULL             alzarius
susan            foreman          gallifrey
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE table_data (first_name text, last_name text, home text);
INSERT INTO "table_data" VALUES('rose','tyler','earth');
INSERT INTO "table_data" VALUES('zoe','heriot','space station w3');
INSERT INTO "table_data" VALUES('jo','grant','earth');
INSERT INTO "table_data" VALUES('leela',NULL,'unspecified');
INSERT INTO "table_data" VALUES('romana',NULL,'gallifrey');
INSERT INTO "table_data" VALUES('clara','oswald','earth');
INSERT INTO "table_data" VALUES('adric',NULL,'alzarius');
INSERT INTO "table_data" VALUES('susan','foreman','gallifrey');
COMMIT;
