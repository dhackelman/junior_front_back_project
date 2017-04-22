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

        var data_table = document.createElement('table'),
            data_table_row = document.createElement('tr'),
            data_table_header = document.createElement('th'),
            data_table_cell = document.createElement('td');
        data_table_exists = false;
        // Builds the HTML Table out of myList json data from Ivy restful service.
        // .clondNode(false) is necessary because the for loop will otherwise create odd mega-elements instead of individual ones for each piece of the data set
        function buildHtmlTable(arr, parent) {

            var table = data_table.cloneNode(false),
                columns = addAllColumnHeaders(arr, table);
            for (var i = 0; i < arr.length; ++i) {
                var tr = data_table_row.cloneNode(false);
                for (var j = 0; j < columns.length; ++j) {
                    var td = data_table_cell.cloneNode(false);
                    cellValue = arr[i][columns[j]];
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
        // Need to do union of keys from all records as some records may not contain
        // all records
        function addAllColumnHeaders(arr, table) {
            var columnSet = [],
                tr = data_table_row.cloneNode(false);
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
                if (data_table_exists === true ) {
                  var existingTables = document.querySelectorAll('table');
                  var existingParent = existingTables[0].parentNode;
                  existingParent.removeChild(existingTables[0]);
                  data_table_exists = false;
                } else {
                  let parent = this.parentElement;
                  // console.log('here');
                  // console.log(this.parentElement);
                  buildHtmlTable(table_data, parent);
                }
            }
        }

})();
