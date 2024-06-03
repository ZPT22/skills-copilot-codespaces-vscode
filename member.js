function skillsMember( {
    var member = {
        name: 'John',
        age: 25,
        skills: ['JS', 'React', 'Node'],
        details: function() {
            this.skills.forEach(skill => {
                console.log(`${this.name} knows ${skill}`);
            });
        }
    }
    member.details();
}