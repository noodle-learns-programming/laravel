-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.5.44-MariaDB-1ubuntu0.14.04.1-log - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- Dumping data for table always.brands: ~2 rows (approximately)
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` (`id`, `name`) VALUES
	(1, 'Brand 1'),
	(2, 'Brand 2');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;

-- Dumping data for table always.customers: ~5 rows (approximately)
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` (`id`, `name`, `gender`, `dob`, `email`, `home_phone`, `mobile_phone`, `address`, `image`, `description`, `created_at`, `updated_at`) VALUES
	(10, 'Khang hang 10', '1', 'Khang hang 10', '', 'Khang hang 10', 'Khang hang 10', '', '1451832556.jpg', 'Khang hang 10', '2016-01-03 14:49:21', '2016-01-03 14:49:21'),
	(11, 'Customer 11', '1', 'Customer 11', '', 'Customer 11', 'Customer 11', '', '1451836460.jpg', 'Customer 11', '2016-01-03 15:54:31', '2016-01-03 15:54:31'),
	(12, 'Customer 12', '1', 'Customer 12', '', 'Customer 12', 'Customer 12', '', '1451837785.jpg', 'Customer 12', '2016-01-03 16:17:00', '2016-01-03 16:17:00'),
	(13, 'Tran Van A', '1', 'test', '', 'test', '123456789', '', '1452705279.jpg', 'test', '2016-01-12 14:53:49', '2016-01-13 17:14:49'),
	(14, 'Tran Van F', '1', '1/1/2010', '', '123456789', '123456789', '', '1452705214.jpg', 'Sai Gon', '2016-01-13 17:13:38', '2016-01-13 17:13:38');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;

-- Dumping data for table always.invoices: ~0 rows (approximately)
/*!40000 ALTER TABLE `invoices` DISABLE KEYS */;
INSERT INTO `invoices` (`id`, `customer_id`, `sale_user_id`, `invoice_state`, `invoice_status`, `payment_total`, `payment_discount`, `payment_net`, `payment_type`, `payment_status`, `transfer_id`, `buy_at_store`, `ship_address_id`, `note`) VALUES
	(1, 10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, NULL);
/*!40000 ALTER TABLE `invoices` ENABLE KEYS */;

-- Dumping data for table always.invoice_items: ~0 rows (approximately)
/*!40000 ALTER TABLE `invoice_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `invoice_items` ENABLE KEYS */;

-- Dumping data for table always.migrations: ~3 rows (approximately)
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` (`migration`, `batch`) VALUES
	('2014_10_12_000000_create_users_table', 1),
	('2014_10_12_100000_create_password_resets_table', 1),
	('2015_12_25_184519_create_products_table', 2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;

-- Dumping data for table always.password_resets: ~0 rows (approximately)
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;

-- Dumping data for table always.products: ~2 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `name`, `description`, `sku`, `series`, `unit`, `brand`, `image`, `created_at`, `updated_at`) VALUES
	(55, 'San pham 40', 'Mo ta san pham 40', 'ip124', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46'),
	(56, 'San pham 41', 'Mo ta san pham 41', 'ip123', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:15:33', '2016-01-03 07:15:33'),
	(57, 'San pham 42', 'Mo ta san pham 42', 'ip42', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46'),
	(58, 'San pham 43', 'Mo ta san pham 43', 'ip43', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46'),
	(59, 'San pham 45', 'Mo ta san pham 45', 'ip45', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46'),
	(60, 'San pham 46', 'Mo ta san pham 46', 'ip46', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46'),
	(61, 'San pham 47', 'Mo ta san pham 47', 'ip47', '999999999999999999', 'chiec', 'Apple', '1451804446.jpg', '2016-01-03 07:00:46', '2016-01-03 07:00:46');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping data for table always.users: ~1 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
	(1, 'tpphu', 'tpphu@yahoo.com', '$2y$10$sllOq2qqjfRsYz2Gc8waLuPPas0/v3OAouiQFmKbMRpgl9WvTyhYi', '8yoCfH7DmMINGEFi2JXaVSfwHnLoemYj5fM0LDk8cee1M0jtENJvPWwXCYXQ', '2016-01-02 23:41:50', '2016-01-02 16:41:50');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
