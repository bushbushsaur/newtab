var section = document.querySelector("section");
var CTRL = 0, ALT = 1, SHIFT = 2, META = 3;

var links = [
    ["https://docs.google.com/document/u/2/","Open Google Docs (zsakowitz@sfbrandeis.org)","1"],
    ["https://docs.google.com/document/u/2/create","Create a Google Doc (zsakowitz@sfbrandeis.org)","1",META],
    ["https://docs.google.com/document/u/0/","Open Google Docs (zsakowitz@gmail.com)","1",CTRL],
    ["https://docs.google.com/document/u/0/create","Create a Google Doc (zsakowitz@gmail.com)","1",CTRL,META],
    
    ["https://docs.google.com/presentation/u/2/","Open Google Slides (zsakowitz@sfbrandeis.org)","2"],
    ["https://docs.google.com/presentation/u/2/create","Create a Google Slide (zsakowitz@sfbrandeis.org)","2",META],
    ["https://docs.google.com/presentation/u/0/","Open Google Slides (zsakowitz@gmail.com)","2",CTRL],
    ["https://docs.google.com/presentation/u/0/create","Create a Google Slide (zsakowitz@gmail.com)","2",CTRL,META],
    
    ["https://docs.google.com/spreadsheets/u/2/","Open Google Sheets (zsakowitz@sfbrandeis.org)","3"],
    ["https://docs.google.com/spreadsheets/u/2/create","Create a Google Sheet (zsakowitz@sfbrandeis.org)","3",META],
    ["https://docs.google.com/spreadsheets/u/0/","Open Google Sheets (zsakowitz@gmail.com)","3",CTRL],
    ["https://docs.google.com/spreadsheets/u/0/create","Create a Google Sheet (zsakowitz@gmail.com)","3",CTRL,META],
    
    ["https://drive.google.com/drive/u/2/my-drive","Open Google Drive (zsakowitz@sfbrandeis.org)","4"],
    ["https://drive.google.com/drive/u/0/my-drive","Open Google Drive (zsakowitz@gmail.com)","4",CTRL],
    
    ["https://calendar.google.com/calendar/u/2/r/week","Open Google Calendar (zsakowitz@sfbrandeis.org)","5"],
    
    ["https://youtube.com/","Open YouTube","6"],
    
    ["https://sfbrandeis.myschoolapp.com/app/student#studentmyday/assignment-center","Open WhippleHill","0"],
];

for (var i = 0;i < links.length;i++) {
    var link = document.createElement("a");
    link.innerHTML = "<h3></h3>";
    link.setAttribute("href",links[i][0]);
    link.querySelector("h3").textContent = links[i][1];
    section.insertAdjacentElement("beforeend",link);
}
