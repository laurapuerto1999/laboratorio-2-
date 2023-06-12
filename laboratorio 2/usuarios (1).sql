-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 11, 2023 at 01:05 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `usuarios`
--

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `primerApellido` varchar(255) NOT NULL,
  `segundoApellido` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `primerApellido`, `segundoApellido`, `username`) VALUES
(1, 'fernandog', 'fernandogualan@mail.com', '1234', 'fer', 'appe', ''),
(2, 'nando', 'nando@gmial.com', '1234', '', '', ''),
(4, 'pau', 'pau1@gmail.com', '12345', '', '', ''),
(5, 'AAAA', 'ferrr@gmail.com', '1234', '', '', ''),
(6, 'admin', 'admin@mail.com', 'agua', '', '', ''),
(7, 'prueba', 'aaa@mail.com', 'fer', '', '', ''),
(8, 'dddddd', 'assd@mail.com', '1234', '', '', ''),
(9, 'aaaaa', 'aaaa@mail.com', '1234', 'ssssss', 'ddddd', ''),
(10, 'fffcdfc', 'fdfgdd@ddd.com', '1234', 'fgdfhdgf', 'fghfhgfghf', ''),
(11, 'asdasd', 'ffere@mail.com', '1234', 'asdasd', 'asdasd', 'aaaaaqw11'),
(12, 'asdasd', 'fer@mail.com', '1234', 'asdasd', 'apelll', 'nuevo1'),
(13, 'aaa', 'fertt@mail.com', '1234', 'weqwe', 'fer', 'fernado'),
(14, 'asdas', 'ggg@mail.com', 'asdas', 'dasdas', 'dasdasdasd', 'asdasd'),
(15, 'qweqwe', 'mmm@mail.com', '1234', 'qweqwe', 'qweqwe', 'qweqw'),
(16, 'qqqq', 'bbbb@mail.com', '1234', 'wwww', 'reee', 'qqqsadas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
