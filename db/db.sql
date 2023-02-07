DROP DATABASE IF EXISTS companydb;
CREATE DATABASE companydb CHARSET utf8mb4;
USE companydb;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES
    (null, 'Peter', 1000),
    (null, 'Susan', 1200),
    (null, 'Mike', 3000),
    (null, 'Jhoni', 1400),
    (null, 'Liza', 2100),