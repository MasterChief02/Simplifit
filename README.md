# Simplifit

## For developers
### Frontend Setup
Initialize react app using following commands:

``` bash
cd frontend
npm install
npm start
```

### Backend Setup

Set Up `MySQL` and `MongoDB` servers in Your System.

#### 1. Update the Configuration File
backend/src/main/resources/application.properties

#### 2. Run SQL Script

Once set up, inside `backend/src/main/resources/sql`, run `wellness_db.sql` file to finish the setup.

#### 3. Time to Start the app!
Initialize spring boot app using following commands:

``` bash
cd backend
mvn spring-boot:run
```

