function get_diff_date(date1, date2) {
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function calc_date(date1, nb_days) {
  const date2 = new Date(date1);
    date2.setDate(date2.getDate() + nb_days);
  return date2;
}

function update_diff(date1, date2) {
    const diff = get_diff_date(new Date(date1), new Date(date2));
    $("#result").val(diff);
}

function update_add(date1, nb_days) {
    const date2 = calc_date(new Date(date1), nb_days);
    $("#result2").val(date2.toISOString().split('T')[0]);
}

$(document).ready(function() {
    $("#date1").on("change", function() {
        update_diff(this.value, $("#date2").val());
    });
    $("#date2").on("change", function() {
        update_diff($("#date1").val(), this.value);
    });
    $("#number").on("change", function() {
        update_add($("#date3").val(), this.value);
    });
    $("#date3").on("change", function() {
        update_add(this.value, $("#number").val());
    });
    $("#modeSelecor").on("change", function() {
        console.log("modeSelector changed");
        switch (this.value) {
            case "add":
                $(".add").show();
                $(".diff").hide();
                break;
            case "diff":
                $(".add").hide();
                $(".diff").show();
                break;
            default:
                $(".add").hide();
                $(".diff").hide();
                break;
        }
    });
    $(".add").show();
    $(".diff").hide();
});