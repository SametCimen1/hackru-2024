CREATE TABLE IF NOT EXISTS "classes" (
	"id" serial PRIMARY KEY NOT NULL,
	"description" text,
	"text" text NOT NULL,
	"created" timestamp DEFAULT now()
);
