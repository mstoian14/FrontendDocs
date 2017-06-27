var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500,
        euroValue: 1
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 4500,
        euroValue: 1
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456789',
        salary: 4500,
        euroValue: 1
    },
    {
        firstName: 'Mike',
        lastName: 'Shinoda',
        phone: '0123456789',
        salary: 4500,
        euroValue: 1
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456789',
        salary: 4500,
        euroValue: 4.2
    },
    {
        firstName: 'Emily',
        lastName: 'Huuuudson',
        phone: '0123456789',
        salary: 4500,
        euroValue: 4.2
    }
];


function showUser(btn) {
    var tr = btn.parentElement.parentElement;
        var td = "Nume: " + tr.children[0].innerHTML + "\nPreunume: " + tr.children[1].innerHTML +"\nPhone:"+ tr.children[2].innerHTML + "\nSalary: "+tr.children[3].innerHTML;;
        alert(td);

}
function deleteUser(btn) {
    var index = btn.parentElement.parentElement.rowIndex;
    employeesList.splice(index-1, 1);
    showList();

}
function oftenFirstName() {
    var noOfApp = 0;
    var firstName = "";
    for(var i in employeesList) {
        var noCount = 0;
        for(j in employeesList) {
            if(employeesList[i].firstName==employeesList[j].firstName) {
                noCount += 1;
            }
        }
        if(noCount > noOfApp) {
            noOfApp = noCount;
            firstName = employeesList[i].firstName;
        }
    }
    return firstName;
}
function noUniqueName() {
    var noUnique=0;
    for(var i in employeesList) {
        var noCount = 0;
        for (j in employeesList) {
            if (employeesList[i].lastName == employeesList[j].lastName) {
                noCount += 1;
            }
        }
        if (noCount == 1) {
            noUnique++;
        }
    }
    return noUnique;
    
}

function averageSalary() {
    var sum = 0;
    for(var i in employeesList) {
        sum += employeesList[i].salary;
    }
    var avg = sum / employeesList.length;
    return avg;
}

function oftenDigits() {

    var digits = new Array(10);
    digits.fill(0);
    for(var i in employeesList) {
        var number = employeesList[i].phone;
        for (var x = 0; x < number.length; x++)
        {
            var c = parseInt(number[x]);
            digits[c] ++;

        }

    }
    var max = -1;
    var index = 0;
    var lst = " ";
    for(var i = 0; i < 5; i++) {
        for(var j in digits) {
            if(max < digits[j]) {
                max = digits[j];
                index = j;
            }
        }
        lst += index+" ,";
        digits[index]=-1;
        max=-1;
    }
    return lst;
}

function showList() {
    var myTable = '<table class="table table-striped" border="1"><tr><th>First Name</th><th>LastName</th><th>Phone</th><th>Salary</th><th>Vizualizare</th><th>Stergere</th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr>' +
            '<td>'+employeesList[i].firstName+'</td>' +
            '<td>'+employeesList[i].lastName+ '</td>' +
            '<td>'+employeesList[i].phone+'</td>' +
            '<td>'+employeesList[i].salary+'</td>' +
            '<td><input type="button" value="Vizualizare" onclick="showUser(this)"/> </td>' +
            '<td><input type="button" value="Delete" onclick="deleteUser(this)"/> </td></tr>';
    }

    myTable +='<tr>' +
        '<td>'+oftenFirstName()+'</td>' +
        '<td>'+noUniqueName()+ '</td>' +
        '<td>'+oftenDigits()+'</td>' +
        '<td>'+averageSalary()+'</td></tr>';
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName,lastName,phone,salary));
}

function deleteLastUser() {
    employeesList.pop();
    showList();
}

function totalSalary() {
    var sum = 0;
    for(var i in employeesList) {
        sum += employeesList[i].salary;
    }
    var container = document.getElementById('listTotalSalary');
    container.innerHTML = sum;
}

function showListEuro() {
    var myTable = '<table class="table table-striped" border="1"><tr><th>First Name</th><th>LastName</th><th>Phone</th><th>Salary</th><th>Euro Salary</th></th></tr>';
    for(var i in employeesList) {
        myTable +=
            '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+ '</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td><td>'+employeesList[i].euroValue+'</td> </tr>';
    }
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

function convertSalary() {
    for(var i in employeesList) {
        employeesList[i].euroValue = employeesList[i].salary / 4.5;
    }
    showListEuro();
}