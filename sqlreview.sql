
//simple select statement
SELECT column_name,column_name
FROM table_name;


//DISTINcT - returns different values// removes duplicates
SELECT DISTINCT column_name,column_name
FROM table_name;


//Where - returns only record fulfill criteria
SELECT column_name,column_name
FROM table_name
WHERE column_name operator value;

//AND/OR concatenate multiple conditions

SELECT * FROM Customers
WHERE City='Berlin'
OR City='München';

SELECT * FROM Customers
WHERE Country='Germany'
AND City='Berlin';

//LIKE - records that match a regex
SELECT * FROM Customers
WHERE City LIKE 's%';

//Wildcards - regex in SQl
SELECT * FROM Customers
WHERE City LIKE '_erlin';

//Order sorts the records in ascending order
SELECT column_name, column_name
FROM table_name
ORDER BY column_name ASC|DESC, column_name ASC|DESC;

//Insert
INSERT INTO table_name (column1,column2,column3,...)
VALUES (value1,value2,value3,...);

//Update
UPDATE table_name
SET column1=value1,column2=value2,...
WHERE some_column=some_value;

//Delete
DELETE FROM table_name
WHERE some_column=some_value;




//CREATE TABLE

CREATE TABLE table_name
(
column_name1 data_type(size),
column_name2 data_type(size),
column_name3 data_type(size),
....
);



//CREATE DB

CREATE DATABASE dbname;
