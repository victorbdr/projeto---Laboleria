
CREATE TABLE "cakes" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR ( 50 ) UNIQUE NOT NULL,
    "price" NUMERIC (8,2),
    "image" VARCHAR ( 255 ) UNIQUE NOT NULL,
    "description" TEXT NOT NULL
);

CREATE TABLE "clients" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "name" VARCHAR ( 255 ) UNIQUE NOT NULL,
    "address" VARCHAR ( 255 ) UNIQUE NOT NULL,
    "phone" VARCHAR ( 50 ) UNIQUE NOT NULL
);

CREATE TABLE "orders" (
    "id" SERIAL PRIMARY KEY NOT NULL,
    "clientId" INTEGER NOT NULL REFERENCES "clients"("id"),
    "cakeId" INTEGER NOT NULL REFERENCES "cakes"("id"),
    "quantity" INTEGER NOT NULL,
    "totalPrice" NUMERIC (8,2),
    "createdAt" TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT NOW()
)