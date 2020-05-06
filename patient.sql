-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 06, 2020 at 05:27 PM
-- Server version: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare`
--

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
CREATE TABLE IF NOT EXISTS `patient` (
  `patientID` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `address` varchar(150) NOT NULL,
  `dob` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phoneNo` int(11) NOT NULL,
  UNIQUE KEY `patientID` (`patientID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patientID`, `name`, `address`, `dob`, `email`, `phoneNo`) VALUES
(1, 'Ayod', 'Panadura', '6/6/1997', 'Ayod@gmail.com', 773333333),
(2, 'Malki', 'Mathara', '6/6/1998', 'malki@hotmail.com', 71222222),
(3, 'Monishka', 'Kaduwela', '8/8/1997', 'monishka@gmail.com', 722222222);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
