function createtable()
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

function createheader()
{
    var header = document.createElement("thead");
    header.setAttribute("id", "header");
    header.setAttribute("class", "header");
    return header;
}

function createheaderrow()
{
    var headerrow = document.createElement("tr");
    headerrow.setAttribute("id", "headerrow");
    headerrow.setAttribute("class", "headerrow");
    return headerrow;
}

function createheadercell()
{
    var headercell = document.createElement("th");
    headercell.setAttribute("id", "headercell");
    headercell.setAttribute("class", "headercell");
    return headercell;
}

function createbody()
{
    var body = document.createElement("tbody");
    body.setAttribute("id", "body");
    body.setAttribute("class", "body");
    return body;
}

function createbodyrow()
{
    var bodyrow = document.createElement("tr");
    bodyrow.setAttribute("id", "bodyrow");
    bodyrow.setAttribute("class", "bodyrow");
    return bodyrow;
}

function createbodycell()
{
    var bodycell = document.createElement("td");
    bodycell.setAttribute("id", "bodycell");
    bodycell.setAttribute("class", "bodycell");
    return bodycell;
}

function createfooter()
{
    var footer = document.createElement("tfoot");
    footer.setAttribute("id", "footer");
    footer.setAttribute("class", "footer");
    return footer;
}
