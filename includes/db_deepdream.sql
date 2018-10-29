-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 29, 2018 at 07:46 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `db_deepdream`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_timeline`
--

CREATE TABLE `tbl_timeline` (
  `id` int(10) UNSIGNED NOT NULL,
  `year` varchar(10) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_timeline`
--

INSERT INTO `tbl_timeline` (`id`, `year`, `description`) VALUES
(1, '1950', 'The concept of machine learning is hypothesized by Alan Turing.'),
(2, '1997', 'Deep Blue, a chess machine, beats human chess machine Garry Kasparov'),
(3, '2015', 'TensorFlow is invented by a team of engineers at Google'),
(4, '2016', 'Google beats a Go grandmaster, a game that\'d been theorized by game theorists as the last on to fall to computers.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_timeline`
--
ALTER TABLE `tbl_timeline`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_timeline`
--
ALTER TABLE `tbl_timeline`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
