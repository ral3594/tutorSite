-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: Tutor
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `availability`
--

DROP TABLE IF EXISTS `availability`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `availability` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `yr` int(11) DEFAULT NULL,
  `monthNum` int(11) DEFAULT NULL,
  `dayNum` int(11) DEFAULT NULL,
  `timeHours` double(3,1) DEFAULT NULL,
  `appt` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `monthNum` (`monthNum`),
  CONSTRAINT `availability_ibfk_1` FOREIGN KEY (`monthNum`) REFERENCES `months` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `availability`
--

LOCK TABLES `availability` WRITE;
/*!40000 ALTER TABLE `availability` DISABLE KEYS */;
INSERT INTO `availability` VALUES (1,2015,10,22,10.5,0),(2,2015,10,22,11.0,0),(3,2015,10,22,11.5,0),(4,2015,10,23,15.0,0),(5,2015,10,23,15.5,0),(6,2015,10,23,16.0,0),(7,2015,11,7,11.0,0),(8,2015,11,9,11.0,0),(9,2015,12,20,9.5,0),(10,2015,12,20,10.0,0),(11,2015,12,20,10.5,0),(12,2015,12,20,11.0,0),(13,2015,10,23,15.0,0),(16,2016,1,12,8.0,0),(17,2016,1,12,8.5,1),(18,2016,1,12,9.0,1),(19,2016,1,12,9.5,0),(20,2016,1,12,10.0,0),(23,2016,1,23,15.0,0),(24,2016,1,23,15.5,0),(25,2016,1,23,16.0,0);
/*!40000 ALTER TABLE `availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `months`
--

DROP TABLE IF EXISTS `months`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `months` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(40) DEFAULT NULL,
  `numDays` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `months`
--

LOCK TABLES `months` WRITE;
/*!40000 ALTER TABLE `months` DISABLE KEYS */;
INSERT INTO `months` VALUES (1,'JANUARY',31),(2,'FEBRUARY',28),(3,'MARCH',31),(4,'APRIL',30),(5,'MAY',31),(6,'JUNE',30),(7,'JULY',31),(8,'AUGUST',31),(9,'SEPTEMBER',30),(10,'OCTOBER',31),(11,'NOVEMBER',30),(12,'DECEMBER',31);
/*!40000 ALTER TABLE `months` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weekdays`
--

DROP TABLE IF EXISTS `weekdays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `weekdays` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekdays`
--

LOCK TABLES `weekdays` WRITE;
/*!40000 ALTER TABLE `weekdays` DISABLE KEYS */;
INSERT INTO `weekdays` VALUES (1,'MONDAY'),(2,'TUESDAY'),(3,'WEDNESDAY'),(4,'THURSDAY'),(5,'FRIDAY'),(6,'SATURDAY'),(7,'SUNDAY');
/*!40000 ALTER TABLE `weekdays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `years`
--

DROP TABLE IF EXISTS `years`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `years` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `yr` int(11) DEFAULT NULL,
  `monthId` int(11) DEFAULT NULL,
  `startDate` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `monthId` (`monthId`),
  CONSTRAINT `years_ibfk_1` FOREIGN KEY (`monthId`) REFERENCES `months` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `years`
--

LOCK TABLES `years` WRITE;
/*!40000 ALTER TABLE `years` DISABLE KEYS */;
INSERT INTO `years` VALUES (1,2015,1,4),(2,2015,2,7),(3,2015,3,7),(4,2015,4,3),(5,2015,5,5),(6,2015,6,1),(7,2015,7,3),(8,2015,8,6),(9,2015,9,2),(10,2015,10,4),(11,2015,11,7),(12,2015,12,2),(13,2016,1,5),(14,2016,2,1),(15,2016,3,2),(16,2016,4,5),(17,2016,5,7),(18,2016,6,3),(19,2016,7,5),(20,2016,8,1),(21,2016,9,4),(22,2016,10,6),(23,2016,11,2),(24,2016,12,4),(25,2017,1,7),(26,2017,2,3),(27,2017,3,3),(28,2017,4,6),(29,2017,5,1),(30,2017,6,4),(31,2017,7,6),(32,2017,8,2),(33,2017,9,5),(34,2017,10,7),(35,2017,11,3),(36,2017,12,5);
/*!40000 ALTER TABLE `years` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-22 16:46:14
