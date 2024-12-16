
npm init -y
npm i express pg sequelize
npm i -D sequelize-cli

sequelize init

rubah configuration

running sequelize db:create (unutk buat databasenya)

buat table dengan sequelize model:generate

buatin associate semua table

buatin references di folder MODELS (INI EDITNYA YANG HANYA ADA KOLOM FK AJA)

buatin references di folder MIGRATIONS (INI EDITNYA YANG HANYA ADA KOLOM FK AJA)

running sequelize db:migrate

buatin seeding (untuk data dunmmy)
sequelize db:seed:all


buatin entry point