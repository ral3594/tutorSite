-- show tables;
-- desc people;
-- alter table people modify column id integer NOT NULL auto_increment;
-- MYSQL COMMANDS CMD LINE:
	-- mysql -u root dbname --> starts db 
	
-- Cloud 9 sql
-- USERNAME = my username (ral3594)
-- password = NONE


-- CONNECT FROM PHP
--      $servername = getenv('IP');
--     $username = getenv('C9_USER');
--     $password = "";
--     $database = "c9";
--     $dbport = 3306;


-- MONTHS 
CREATE TABLE months(id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, fullName VARCHAR(40), numDays INTEGER);

INSERT INTO months(fullName, numDays) VALUES ('JANUARY', 31);
INSERT INTO months(fullName, numDays) VALUES ('FEBRUARY', 28);
INSERT INTO months(fullName, numDays) VALUES ('MARCH', 31);
INSERT INTO months(fullName, numDays) VALUES ('APRIL', 30);
INSERT INTO months(fullName, numDays) VALUES ('MAY', 31);
INSERT INTO months(fullName, numDays) VALUES ('JUNE', 30);
INSERT INTO months(fullName, numDays) VALUES ('JULY', 31);
INSERT INTO months(fullName, numDays) VALUES ('AUGUST', 31);
INSERT INTO months(fullName, numDays) VALUES ('SEPTEMBER', 30);
INSERT INTO months(fullName, numDays) VALUES ('OCTOBER', 31);
INSERT INTO months(fullName, numDays) VALUES ('NOVEMBER', 30);
INSERT INTO months(fullName, numDays) VALUES ('DECEMBER', 31);


-- WEEKDAYS

CREATE TABLE weekdays(id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, fullName varchar(40));

INSERT INTO weekdays(fullName) VALUES ('MONDAY');
INSERT INTO weekdays(fullName) VALUES ('TUESDAY');
INSERT INTO weekdays(fullName) VALUES ('WEDNESDAY');
INSERT INTO weekdays(fullName) VALUES ('THURSDAY');
INSERT INTO weekdays(fullName) VALUES ('FRIDAY');
INSERT INTO weekdays(fullName) VALUES ('SATURDAY');
INSERT INTO weekdays(fullName) VALUES ('SUNDAY');


-- YEARS

CREATE TABLE years(id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT, yr INTEGER, monthId INTEGER, startDate INTEGER, FOREIGN KEY (monthId) REFERENCES months(id));
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 1, 4);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 2, 7);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 3, 7);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 4, 3);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 5, 5);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 6, 1);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 7, 3);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 8, 6);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 9, 2);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 10, 4);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 11, 7);
INSERT INTO years(yr, monthId, startDate) VALUES (2015, 12, 2);


INSERT INTO years(yr, monthId, startDate) VALUES (2016, 1, 5);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 2, 1);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 3, 2);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 4, 5);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 5, 7);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 6, 3);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 7, 5);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 8, 1);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 9, 4);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 10, 6);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 11, 2);
INSERT INTO years(yr, monthId, startDate) VALUES (2016, 12, 4);

SELECT * FROM years;

-- TEST
select  w.fullName from weekdays w, years y where y.startDate = w.id and y.startDate = 1;



-- AVAILABILITY
CREATE TABLE availability(id integer PRIMARY KEY NOT NULL AUTO_INCREMENT, yr INTEGER, monthNum INTEGER, dayNum INTEGER, timeHours DOUBLE(3,1), FOREIGN KEY (monthNum) REFERENCES months(id));

INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 22, 10.5);
INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 22 , 11);
INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 22 , 11.5);

INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 23, 15);
INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 23 , 15.5);
INSERT INTO availability(yr, monthNum, dayNum, timeHours) VALUES (2015, 10, 23 , 16);

-- Sample query
SELECT timeHours FROM availability WHERE yr = 2015 AND monthNum = 10 AND dayNum = 22;