//studentEnrollment.js
let DSA = [];
let PL = [];
let Networks = [];

while (true) {
    let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
    let subjectArray;
    switch (subjectChoice) {
        case 'A':
            subjectArray = DSA;
            break;
        case 'B':
            subjectArray = PL;
            break;
        case 'C':
            subjectArray = Networks;
            break;
        case 'D':
            console.log("Enrolled Students:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            alert("Exiting the program.");
            break;
        default:
            alert("Invalid choice, please select again.");
            continue;
    }

    if (subjectChoice === 'D') break; 

    let operation = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

    if (operation === 'A') {
        let studentName = prompt("Enter the name of the student to enroll:");
        subjectArray.push(studentName); 
        console.log(`${studentName} has been enrolled in the selected subject.`);
    }

    else if (operation === 'B') {
        if (subjectArray.length === 0) {
            alert("No students enrolled in this subject.");
        } else {
            console.log("Current enrolled students:", subjectArray);
            let studentName = prompt("Enter the name of the student to unenroll:");
            let index = subjectArray.indexOf(studentName);
            if (index !== -1) {
                subjectArray.splice(index, 1); 
                console.log(`${studentName} has been unenrolled from the selected subject.`);
            } else {
                alert(`${studentName} is not enrolled in this subject.`);
            }
        }
    }

    else if (operation === 'C') {
        continue;
    }

    else if (operation === 'D') {
        console.log("Enrolled Students:");
        console.log("DSA:", DSA);
        console.log("PL:", PL);
        console.log("Networks:", Networks);
        alert("Exiting the program.");
        break;
    }


    else {
        alert("Invalid operation, please select again.");
    }
}
