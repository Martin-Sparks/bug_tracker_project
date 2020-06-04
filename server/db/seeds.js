use bugtracker;
db.dropDatabase();

db.bugs.insertMany([
    {
        name: "button not working",
        description:"Button doesn't click",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Martin",
        label:"Front End",
        priorityStatus:"Urgent"
    }
]);

