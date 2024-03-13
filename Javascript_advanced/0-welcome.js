function welcome(firstName, lastName) {
    let fullName = firstName + '' + lastName;
    function displayFullName() {
        alert('Welcome' + fullName + '!')
    }
    displayFullName();
}

welcome('Holberton', 'School');

alert(fullName); // should return a reference error fullName is not defined