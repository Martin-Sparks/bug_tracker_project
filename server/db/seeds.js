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
    },

    {
        name: "Web form not working ",
        description:"Wont submit",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Dave",
        label:"Front End",
        priorityStatus:"Urgent"
    },

    {
        name: "Web form not working ",
        description:"Wont submit",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Dave",
        label:"Front End",
        priorityStatus:"Urgent"
    }
]);

db.users.insertMany([

    {
        name: "Martin Sparks",
        positionHeld:"Software Developer",
        email:"Martin.sparks@CodeClan.com",
    }

])

