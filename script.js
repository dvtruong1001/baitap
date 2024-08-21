var _array = [];
document.addEventListener('DOMContentLoaded', function () {
    const array_print_btn = document.getElementById("array-print");
    array_print_btn.addEventListener("click", function (e) {
        const array_count = document.getElementById("array-count");
        if(!array_count.value) {
            return;
        }
        _array = [];
        document.getElementById("result").innerHTML = "Kết quả mảng : ";
        for (var i = 0; i < array_count.value; i++) {
            // var _input = prompt("NHập phần tử thứ : " + i);
            // if (!_input) {
            //     alert("Số không hợp lệ");
            //     break;
            // }

            _input = Math.round(Math.random() * 100);

            _array.push(_input);
            

        }

        document.getElementById("result").innerHTML += _array;
    });

    const search_btn = document.getElementById("search-btn");
    search_btn.addEventListener("click", function (e) {
        if(!document.getElementById("search-val").value) {
            return;
        }
        const search_pos = _array.indexOf(document.getElementById("search-val").value);
        if (search_pos >= 0) {
            document.getElementById("result-search").innerHTML = "Giá trị " + document.getElementById("search-val").value + " xuất hiện tại vị trí thứ : " + search_pos.toString();
        } else {
            document.getElementById("result-search").innerHTML = "không tìm thấy giá trị " + document.getElementById("search-val").value + " trong mảng";
        }
    });


    const sort_a_btn = document.getElementById("sort-a");
    sort_a_btn.addEventListener("click", function (e) {
        _array.sort((a, b) => a - b);
        document.getElementById("result").innerHTML = "Kết quả mảng : ";
        const sort_b_btn = document.getElementById("sort-b");
        document.getElementById("result").innerHTML += _array;
    });


    const sort_b_btn = document.getElementById("sort-b");
    sort_b_btn.addEventListener("click", function (e) {
        _array.sort((a, b) => b - a);
        document.getElementById("result").innerHTML = "Kết quả mảng : ";
        const sort_b_btn = document.getElementById("sort-b");
        document.getElementById("result").innerHTML += _array;
    });


    const insert_btn = document.getElementById("insert-btn");
    insert_btn.addEventListener("click", function (e) {
        if(!document.getElementById("insert-val").value || !document.getElementById("insert-pos").value) {
            return;
        }
        _array.splice(document.getElementById("insert-pos").value, 0, document.getElementById("insert-val").value);
        document.getElementById("result").innerHTML = "Kết quả mảng : ";
        document.getElementById("result").innerHTML += _array;
        

    });

});