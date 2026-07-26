CREATE TABLE `reviews` (
	`id` text PRIMARY KEY NOT NULL,
	`tour_slug` text NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`country_code` text NOT NULL,
	`rating` integer NOT NULL,
	`comment` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`ip_hash` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE INDEX `reviews_tour_status_created_idx` ON `reviews` (`tour_slug`,`status`,`created_at`);--> statement-breakpoint
CREATE INDEX `reviews_ip_created_idx` ON `reviews` (`ip_hash`,`created_at`);