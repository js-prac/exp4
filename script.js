
const str1 = document.getElementById("str1");
const str2 = document.getElementById("str2");
const result = document.getElementById("result");

// 1. Loose equality
function looseEqual(a, b) {
    return a == b;
}

// 2. Strict equality
function strictEqual(a, b) {
    return a === b;
}

// 3. localeCompare()
function localCompare(a, b) {
    return a.localeCompare(b) === 0;
}

// 4. Case-insensitive comparison
function caseInsensitive(a, b) {
    return a.toLowerCase() === b.toLowerCase();
}

// 5. Relational operator
function relationalCompare(a, b) {
    return a <= b && a >= b;
}

// 6. Custom method using two pointers
function customCompare(a, b) {
    if (a.length !== b.length)
        return false;

    let left = 0;
    let right = a.length - 1;

    while (left <= right) {
        if (a[left] !== b[left])
            return false;

        if (a[right] !== b[right])
            return false;

        left++;
        right--;
    }

    return true;
}

// Compare using strict equality
document.getElementById("compareBtn").addEventListener("click", function () {
    const a = str1.value;
    const b = str2.value;

    if (a === "" || b === "") {
        result.textContent = "Please enter both strings.";
        return;
    }

    if (strictEqual(a, b)) {
        result.textContent = "Both strings are strictly equal.";
    } else {
        result.textContent = "The strings are not strictly equal.";
    }
});

// Reset
document.getElementById("resetBtn").addEventListener("click", function () {
    str1.value = "";
    str2.value = "";
    result.textContent = "";
});
