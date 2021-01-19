var section = document.querySelector("section");
var CTRL = 0, ALT = 1, SHIFT = 2, META = 3;

var links = [
    ["https://docs.google.com/document/u/2/","Open Google Docs (School)","1"],
    ["https://docs.google.com/document/u/2/create","Create a Google Doc (School)","1",META],
    ["https://docs.google.com/document/u/0/","Open Google Docs (Personal)","1",CTRL],
    ["https://docs.google.com/document/u/0/create","Create a Google Doc (Personal)","1",CTRL,META],
    
    ["https://docs.google.com/presentation/u/2/","Open Google Slides (School)","2"],
    ["https://docs.google.com/presentation/u/2/create","Create a Google Slide (School)","2",META],
    ["https://docs.google.com/presentation/u/0/","Open Google Slides (Personal)","2",CTRL],
    ["https://docs.google.com/presentation/u/0/create","Create a Google Slide (Personal)","2",CTRL,META],
    
    ["https://docs.google.com/spreadsheets/u/2/","Open Google Sheets (School)","3"],
    ["https://docs.google.com/spreadsheets/u/2/create","Create a Google Sheet (School)","3",META],
    ["https://docs.google.com/spreadsheets/u/0/","Open Google Sheets (Personal)","3",CTRL],
    ["https://docs.google.com/spreadsheets/u/0/create","Create a Google Sheet (Personal)","3",CTRL,META],
    
    ["https://drive.google.com/drive/u/2/my-drive","Open Google Drive (School)","4"],
    ["https://drive.google.com/drive/u/0/my-drive","Open Google Drive (Personal)","4",CTRL],
    
    ["https://calendar.google.com/calendar/u/2/r/week","Open Google Calendar (School)","5"],
    
    ["https://youtube.com/","Open YouTube","6"],
    
    ["https://sfbrandeis.myschoolapp.com/app/student#studentmyday/assignment-center","Open WhippleHill","0"]
];

for (var i = 0;i < links.length;i++) {
    var link = document.createElement("a");
    link.innerHTML = "<h3></h3>";
    link.setAttribute("href",links[i][0]);
    link.querySelector("h3").textContent = links[i][1];
    section.insertAdjacentElement("beforeend",link);
}