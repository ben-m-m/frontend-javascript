interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

const studentsList: Student[] = [student1, student2];

function createCell(text: string): HTMLTableCellElement {
    const td: HTMLTableCellElement = document.createElement("td");
    td.textContent = text;
    return td;
}

function renderStudentsTable(students: Student[]): void {
    const table: HTMLTableElement = document.createElement("table");
    table.setAttribute("border", "1");
    table.style.borderCollapse = "collapse";
    table.style.width = "8px 0";

    const thead: HTMLTableSectionElement = document.createElement("thead");
    const headerRow: HTMLTableRowElement = document.createElement("tr");
    headerRow.appendChild(createCell("First Name"));
    headerRow.appendChild(createCell("Location"));
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody: HTMLTableSectionElement = document.createElement("tbody");
    students.forEach((student: Student) => {
        const row: HTMLTableRowElement = document.createElement("tr");
        row.appendChild(createCell(student.firstName));
        row.appendChild(createCell(student.location));
        
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    document.body.appendChild(table);
}

renderStudentsTable(studentsList);