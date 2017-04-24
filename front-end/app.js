(function() {

    var table_data = [{
            first_name: 'Rose',
            last_name: 'Tyler',
            home: 'Earth'
        },
        {
            first_name: 'Zoe',
            last_name: 'Heriot',
            home: 'Space Station W3'
        },
        {
            first_name: 'Jo',
            last_name: 'Grant',
            home: 'Earth'
        },
        {
            first_name: 'Leela',
            last_name: null,
            home: 'Unspecified'
        },
        {
            first_name: 'Romana',
            last_name: null,
            home: 'Gallifrey'
        },
        {
            first_name: 'Clara',
            last_name: 'Oswald',
            home: 'Earth'
        },
        {
            first_name: 'Adric',
            last_name: null,
            home: 'Alzarius'
        },
        {
            first_name: 'Susan',
            last_name: 'Foreman',
            home: 'Gallifrey'
        }
    ];
    //declare table elements to be used in build function
    var data_table = document.createElement('table'),
        data_table_row = document.createElement('tr'),
        data_table_header = document.createElement('th'),
        data_table_cell = document.createElement('td');
        //use this variable to make toggle possible
        data_table_exists = false;
    // Builds the HTML Table out of table_data.
    // .cloneNode(false) is necessary because the for loop will otherwise create odd mega-elements instead of individual ones for each piece of the data set
    //arr argument will be replaced by table_data when it is called with the on-click event below
    function buildTable(arr, parent) {

        var table = data_table.cloneNode(false);
        var columns = addColumnHeaders(arr, table);
        for (var i = 0; i < arr.length; ++i) {
            var tr = data_table_row.cloneNode(false);
            for (var j = 0; j < columns.length; ++j) {
                var td = data_table_cell.cloneNode(false);
                var cellValue = arr[i][columns[j]];
                td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        console.log(table);
        parent.appendChild(table);
        data_table_exists = true;

    }

    // Adds a header row to the table and returns the set of columns.
    function addColumnHeaders(arr, table) {
        var columnSet = [];
        var tr = data_table_row.cloneNode(false);
        for (var i = 0, l = arr.length; i < l; i++) {
            for (var key in arr[i]) {
                if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
                    columnSet.push(key);
                    var th = data_table_header.cloneNode(false);
                    th.appendChild(document.createTextNode(key));
                    tr.appendChild(th);
                }
            }
        }
        table.appendChild(tr);
        //  console.log(columnSet);

        return columnSet;
    }



    var button = document.querySelectorAll('button');
    // console.log(button[0].parentElement);
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = function() {
            //homemade toggle function that checks for exisiting table in parent node (can't check siblings without jquery)
            if (data_table_exists === true) {
                //return list of existing tables
                var existingTables = document.querySelectorAll('table');
                //there should only be 1, so grab it, and find parentNode
                var existingParent = existingTables[0].parentNode;
                //use parentNode to delete children who are tables (don't delete button!)
                existingParent.removeChild(existingTables[0]);
                //reset boolean that helps create toggle
                data_table_exists = false;
            } else {
                let parent = this.parentElement;
                // console.log('here');
                // console.log(this.parentElement);
                buildTable(table_data, parent);
            }
        }
    }

})();
