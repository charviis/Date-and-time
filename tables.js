function createtable
{
    var table = document.createElement("table");
    table.setAttribute("id", "table");
    table.setAttribute("border", "1");
    table.setAttribute("cellspacing", "0");
    table.setAttribute("cellpadding", "0");
    table.setAttribute("align", "center");
    table.setAttribute("width", "100%");
    table.setAttribute("height", "100%");
    table.setAttribute("class", "table");
    return table;
}

function createheader
{
    var header = document.createElement("th");
    header.setAttribute("id", "header");
    header.setAttribute("align", "center");
    header.setAttribute("width", "100%");
    header.setAttribute("height", "100%");
    header.setAttribute("class", "header");
    return header;
}

function createcell
{
    var cell = document.createElement("td");
    cell.setAttribute("id", "cell");
    cell.setAttribute("align", "center");
    cell.setAttribute("width", "100%");
    cell.setAttribute("height", "100%");
    cell.setAttribute("class", "cell");
    return cell;
}

function createbutton
{
    var button = document.createElement("button");
    button.setAttribute("id", "button");
    button.setAttribute("align", "center");
    button.setAttribute("width", "100%");
    button.setAttribute("height", "100%");
    button.setAttribute("class", "button");
    return button;
}

function createinput
{
    var input = document.createElement("input");
    input.setAttribute("id", "input");
    input.setAttribute("align", "center");
    input.setAttribute("width", "100%");
    input.setAttribute("height", "100%");
    input.setAttribute("class", "input");
    return input;
}

function createlabel
{
    var label = document.createElement("label");
    label.setAttribute("id", "label");
    label.setAttribute("align", "center");
    label.setAttribute("width", "100%");
    label.setAttribute("height", "100%");
    label.setAttribute("class", "label");
    return label;
}
