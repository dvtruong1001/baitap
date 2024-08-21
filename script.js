var _array = [];
document.addEventListener('DOMContentLoaded', function () {
    const array_print_btn = document.getElementById("array-print");
    array_print_btn.addEventListener("click", function (e) {
        const array_count = document.getElementById("array-count");
        _array = [];
        for (var i = 0; i < array_count.value; i++) {
            var _input = prompt("NHập phần tử thứ : " + i);
            if (!_input) {
                alert("Số không hợp lệ");
                break;
            }

            _array.push(_input);
            document.getElementById("result").innerHTML += _input.toString().concat(" ");

        }
    });

    const search_btn = document.getElementById("search-btn");
    search_btn.addEventListener("click", function (e) {
        const search_pos = _array.indexOf(document.getElementById("search-val").value);
        if (search_pos >= 0) {
            document.getElementById("result-search").innerHTML = "Giá trị " + document.getElementById("search-val").value + " xuất hiện tại vị trí thứ : " + search_pos.toString();
        }
    });


    const sort_a_btn = document.getElementById("sort-a");
    sort_a_btn.addEventListener("click", function (e) {
        _array.sort((a, b) => a - b);
        document.getElementById("result").innerHTML = "";
        const sort_b_btn = document.getElementById("sort-b");
        _array.forEach((val) => {
            document.getElementById("result").innerHTML += val.toString().concat(" ");
        });
    });


    const sort_b_btn = document.getElementById("sort-b");
    sort_b_btn.addEventListener("click", function (e) {
        _array.sort((a, b) => b - a);
        document.getElementById("result").innerHTML = "";
        const sort_b_btn = document.getElementById("sort-b");
        _array.forEach((val) => {
            document.getElementById("result").innerHTML += val.toString().concat(" ");
        });
    });


    const insert_btn = document.getElementById("insert-btn");
    insert_btn.addEventListener("click", function (e) {
        _array.splice(document.getElementById("insert-pos").value, 0, document.getElementById("insert-val").value);
        document.getElementById("result").innerHTML = "";
        _array.forEach((val) => {
            document.getElementById("result").innerHTML += val.toString().concat(" ");
        });

    });

});