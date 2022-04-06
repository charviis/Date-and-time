function dateandtime_get_date_format() {
    return '%Y-%m-%d';
}

function calendar_date_format() {
    return '%Y-%m-%d';
}
function createcalendarform() {
    return '<form name="calendarform" action="' . $CFG->wwwroot . 'calendar.php" method="get">
<div>
<input type="hidden" name="choose" value="1" />
<input type="hidden" name="course" value="' . $course->id . '" />
<input type="text" name="time" size="12" value="" />
<input type="submit" value="' . get_string('go') . '" />
</div>
</form>';
}

function createtable($data, $columns, $align, $tablewidth, $tableclass) {
    $table = new stdClass;
    $table->data = $data;
    $table->align = $align;
    $table->size = $columns;
    $table->width = $tablewidth;
    $table->class = $tableclass;
    return print_table($table, true);
}

function createarray($data, $columns, $align, $tablewidth, $tableclass) {
    $table = new stdClass;
    $table->data = $data;
    $table->align = $align;
    $table->size = $columns;
    $table->width = $tablewidth;
    $table->class = $tableclass;
    return print_table($table, true);
}