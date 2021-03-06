const square = function(number) {
    return number * number;
}

const square2 = number => number*number;

// console.log(square2(6));

const jobs = [
    {id:1, isActive:true},
    {id:2, isActive:true},
    {id:3, isActive:false}
];

const activeJobs = jobs.filter(job => job.isActive);
// activeJobs.forEach(job => console.log(job));

const person = {
    talk() {
        // var self = this;
        // setTimeout(function() {
        //     console.log("self",  self);
        // }, 1000);
        
        setTimeout(()=>console.log("this", this), 1000);
    }
};

person.talk();