
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










----------







npm init -y
npm i express pg sequelize 
npm i -D sequelize-cli

sequelize init
rubah file config

sequelize db:create

sequelize model:generate

setting relasi
    - models
        add references di column fk
        add static associate
    - mmigration
        add references di coloumn fk

buat seeding (jangan lupa onDelete, on update)

initialize code express



register
login
buat token
authenticate

npm i jsonwebtoken bcrypt
mkdir helpers
touch bcrypt.js
    defined bcrypt

buat add hook di model beforeCreate

buat routing register

buat routing login

buat file jwt.js di helpers untuk buat token
    generateToken

panggil di endpoint login generate token yang dibuat tadi

    verifyToken

bikin folder middlewares
bikin file authentication.js
