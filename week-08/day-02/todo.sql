SHOW databases;
use todo;
CREATE TABLE todo(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(100) NOT NULL,
    goaldate DATE NOT NULL);

INSERT INTO todo (id, task, goaldate)
    VALUES (1, 'cleaning', '2020-12-15');

INSERT INTO todo (id, task, goaldate)
    VALUES (2, 'study', '2027-04-05');

INSERT INTO todo (id,task, goaldate)
    VALUES (3, 'make dinner', '2032-06-15');

SELECT * FROM todo;
+----+-------------+------------+
| id | task        | goaldate   |
+----+-------------+------------+
|  1 | cleaning    | 2020-12-15 |
|  2 | study       | 2027-04-05 |
|  3 | make dinner | 2032-06-15 |
+----+-------------+------------+
