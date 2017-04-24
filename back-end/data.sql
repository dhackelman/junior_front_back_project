first_name       last_name        home                
---------------  ---------------  --------------------
rose             tyler            earth
zoe              heriot           space station w3
jo               grant            earth
leela            null             unspecified
romana           null             gallifrey
clara            oswald           earth
adric            null             alzarius
susan            foreman          gallifrey
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE alien_table(first_name, last_name, home);
INSERT INTO "alien_table" VALUES('rose','tyler','earth');
INSERT INTO "alien_table" VALUES('zoe','heriot','space station w3');
INSERT INTO "alien_table" VALUES('jo','grant','earth');
INSERT INTO "alien_table" VALUES('leela','null','unspecified');
INSERT INTO "alien_table" VALUES('romana','null','gallifrey');
INSERT INTO "alien_table" VALUES('clara','oswald','earth');
INSERT INTO "alien_table" VALUES('adric','null','alzarius');
INSERT INTO "alien_table" VALUES('susan','foreman','gallifrey');
COMMIT;
