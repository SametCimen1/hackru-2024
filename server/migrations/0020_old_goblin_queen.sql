ALTER TABLE "classes" RENAME COLUMN "text" TO "title";--> statement-breakpoint
ALTER TABLE "classes" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "classes" ALTER COLUMN "title" DROP NOT NULL;