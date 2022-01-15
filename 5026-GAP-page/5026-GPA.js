$(document).ready(function(e) {
    var selectYear = document.querySelector('#year');
    var selectSem = document.querySelector('#semester');

    var data1 = [
        { field1: '001101', field2: 'FUNDAMENTAL ENGLISH 1', field3: 'D' },
        { field1: '206113', field2: 'CAL FOR SOFTWARE TECH', field3: 'F'},
        { field1: '261111', field2: 'INTERNET AND ONLINE COMMUNITY', field3: 'D+'},
        { field1: '951100', field2: 'MODERN LIFE AND ANIMATION', field3: 'B'},
        { field1: '953100', field2: 'COMPUTERS AND PROGRAMMING', field3: 'D'},
        { field1: '955102', field2: 'DIGITAL LITERACY', field3: 'B'},
        { field1: '955103', field2: 'PROGRAMMING LOGICAL THINKING', field3: 'D'},
        { field1: '', field2: 'GPA:', field3: '1.47',}
        ];
    
    var data2 = [
        { field1: '001102', field2: 'FUNDAMENTAL ENGLISH 2', field3: 'D+' },
        { field1: '140104', field2: 'CITIZENSHIP', field3: 'D+' },
        { field1: '953102', field2: 'ADT & PROBLEM SOLVING', field3: 'C'},
        { field1: '953202', field2: 'INTRODUCTION TO SE', field3: 'C+'},
        { field1: '953211', field2: 'COMPUTER ORGANIZATION', field3: 'D'},
        { field1: '953231', field2: 'OBJECT ORIENTED PROGRAMMING', field3: 'D'},
        { field1: '', field2: 'GPA:', field3: '1.58'}
        ];
    
    var data3 = [
        { field1: '001201', field2: 'CRIT READ AND EFFEC WRITE', field3: 'C+' },
        { field1: '011269', field2: 'PHIL OF SUFFICIENCY ECON', field3: 'C' },
        { field1: '208263', field2: 'ELEMENTARY STATISTICS', field3: 'W' },
        { field1: '953201', field2: 'ALGORITHMS DESIGN AND ANALYSIS', field3: 'D+'},
        { field1: '953212', field2: 'DB SYS & DB SYS DESIGN', field3: 'C'},
        { field1: '953233', field2: 'ADVANCED PROGRAMMING', field3: 'C'},
        { field1: '953251', field2: 'HFAC IN DIGI INTERACT DESIGN', field3: 'C+'},
        { field1: '', field2: 'GPA:', field3: '2.08'},
        ];

    var data4 = [
        { field1: '953214', field2: 'OS & COMP NETWORK', field3: '' },
        { field1: '953234', field2: 'DEV OPS', field3: '' },
        { field1: '953262', field2: 'FRONT-END WEB DEV FOUNDATION', field3: ''},
        { field1: '001225', field2: 'ENGL IN SCIENCE & TECH CONT', field3: ''},
        { field1: '013110', field2: 'PSYCHOLOGY AND DAILY LIFE', field3: ''},
        { field1: '', field2: 'GPA:', field3: ''},
        ];
    
    function loadTable(tableId, fields, data) {
        var rows = '';
        $.each(data, function(index, item) {
            var row = '<tr>';
            $.each(fields, function(index, field) {
                row += '<td>' + item[field+''] + '</td>';
            });
            rows += row + '<tr>';
        });
        $('#' + tableId + ' tbody').html(rows);
    }


    selectYear.addEventListener('change',function(){
        if(selectYear.value == 1 && selectSem.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data1); 
        }else if(selectYear.value == 1 && selectSem.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data2);
        }else if(selectYear.value == 2 && selectSem.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data3);
        }else if(selectYear.value == 2 && selectSem.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data4);
        }
    },false);

    selectSem.addEventListener('change',function(){
        if(selectYear.value == 1 && selectSem.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data1); 
        }else if(selectYear.value == 1 && selectSem.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data2);
        }else if(selectYear.value == 2 && selectSem.value == 1) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data3);
        }else if(selectYear.value == 2 && selectSem.value == 2) {
            loadTable('data-table', ['field1', 'field2', 'field3',], data4);
        }
    }, false);
});