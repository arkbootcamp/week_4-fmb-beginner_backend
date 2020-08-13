-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2020 at 05:39 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library_api`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(5) NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `genre_id` int(11) NOT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `updated_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `genre_id`, `created_at`, `updated_at`) VALUES
(2, 'Percy Jackson - The Lightning Thief', 'Rick Riordan', 1, '2020-07-28 04:53:21.339847', '2020-07-28 05:12:23.000000'),
(3, 'Fundamental Physics', 'Halliday', 2, '2020-07-28 05:03:58.885942', '2020-07-28 05:03:58.885942'),
(4, 'Percy Jackson - The Last Olympian', 'Rick Riordan', 1, '2020-07-28 05:13:39.270223', '2020-07-28 05:13:39.270223'),
(5, 'Laskar Pelangi', 'Andrea Hirata', 4, '2020-07-28 08:24:10.942260', '2020-07-28 08:24:10.942260'),
(6, 'Naruto', 'Masashi Kishimoto', 1, '2020-07-28 08:36:36.316601', '2020-07-28 08:36:36.316601'),
(7, 'Naruto Shippuden', 'Masashi Kishimoto', 1, '2020-07-28 08:40:32.259527', '2020-07-28 08:40:32.259527'),
(8, 'Harry Potter - The Deathly Hallows', 'JK Rowling', 5, '2020-07-28 08:44:04.176757', '2020-07-28 08:44:04.176757'),
(9, 'Harry Potter - The Prince of Azkaban', 'JK Rowling', 5, '2020-07-30 03:51:20.007286', '2020-07-30 03:51:20.007286'),
(10, 'Harry Potter - The Philosopher Stone', 'JK Rowling', 5, '2020-07-30 03:56:03.838220', '2020-07-30 03:56:03.838220'),
(11, 'Harry Potter - The Goblet of Fire', 'JK Rowling', 5, '2020-07-30 03:58:19.007385', '2020-07-30 03:58:19.007385'),
(12, 'Percy Jackson - The Son of Neptune', 'Rick Riordan', 1, '2020-07-30 04:05:37.686204', '2020-07-30 04:05:37.686204');

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `genre` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `genres`
--

INSERT INTO `genres` (`id`, `genre`) VALUES
(1, 'Action'),
(2, 'Physics'),
(4, 'Family'),
(5, 'Fiction');

-- --------------------------------------------------------

--
-- Table structure for table `levels`
--

CREATE TABLE `levels` (
  `id` int(11) NOT NULL,
  `level` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `levels`
--

INSERT INTO `levels` (`id`, `level`) VALUES
(1, 'Cashier'),
(2, 'Supervisor'),
(3, 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `level_id`) VALUES
(1, 'arkademy', '$2b$10$f8hL5aNFh9G0VQu8E6y5/ONaSGJzQkEcM1qeyufuwz9bFuIq6IeJy', 1),
(2, 'arkademy1', '$2b$10$8vswDQq3XHxoSzHQNuc4oekcLq8PbtQo2ioDDvTVBW8GQTapD3J02', 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `levels`
--
ALTER TABLE `levels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `levels`
--
ALTER TABLE `levels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
