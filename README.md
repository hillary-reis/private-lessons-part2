# private-lessons-part2
Desafio do módulo 05, fase 03 do curso LaunchBase da Rocketseat, com o objetivo de trabalhar com banco de dados a partir do projeto inicial

### Installing dependencies

Ubuntu
```bash
sudo apt install npm
npm install
```

### create database
```bash
docker run --name postgres_my_teacher \
                -p 5432:5432 \
                -e POSTGRES_PASSWORD=1209 \
                -e POSTGRES_USER=postgres \
                -e POSTGRES_HOST_AUTH_METHOD=trust \
                -e POSTGRES_DB=my_teacher \
                -d postgres
```

### run
```bash
npm start
```