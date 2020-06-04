use bugtracker;
db.dropDatabase();

db.bugs.insertMany([
    {
        name: "button not working",
        description:"Button doesn't click"
    }
]);

