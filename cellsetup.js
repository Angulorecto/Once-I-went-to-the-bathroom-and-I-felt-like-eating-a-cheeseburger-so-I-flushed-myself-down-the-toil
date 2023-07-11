function setup() {
  var column = document.getElementById("activeServers");
        
        var cell = document.createElement("div");
        cell.setAttribute("class" ,"cell");
        cell.setAttribute("align" ,"center");
        cell.setAttribute("style" ,"width:450px");
        column.appendChild(cell);
        
        var serviceTitle = document.createElement("H3");
        serviceTitle.setAttribute("class" ,"whiteRight");
        serviceTitle.setAttribute("align" ,"center");
        serviceTitle.setAttribute("style" ,"position:relative; top:10px; left:10px; line-height: 0.8;");
        serviceTitle.innerHTML = service.serviceName;
        cell.appendChild(serviceTitle);

        var serviceStatus = document.createElement("H4");
        serviceStatus.setAttribute("id" ,"status" + service.serviceNum);
        serviceStatus.setAttribute("class" ,"whiteRight");
        serviceStatus.setAttribute("style" ,"position:relative; left:10px;");
        serviceStatus.innerHTML = "idk";
        cell.appendChild(serviceStatus);

        var resumeButton = document.createElement("button");
        resumeButton.setAttribute("class" ,"blackRight");
        resumeButton.setAttribute("style" ,"position:relative; left:10px; background-color:green; border-radius:15px;");
        resumeButton.setAttribute("onclick" ,"resumeService(" + service.serviceNum + ")");
        resumeButton.innerHTML = "Resume";
        cell.appendChild(resumeButton);
        
        var suspendButton = document.createElement("button");
        suspendButton.setAttribute("class" ,"blackRight");
        suspendButton.setAttribute("style" ,"position:relative; left:10px; background-color:yellow; border-radius:15px;");
        suspendButton.setAttribute("onclick" ,"suspendService(" + service.serviceNum + ")");
        suspendButton.innerHTML = "Suspend";
        cell.appendChild(suspendButton);
        
        var deleteButton = document.createElement("button");
        deleteButton.setAttribute("class" ,"blackRight");
        deleteButton.setAttribute("style" ,"position:relative; left:10px; background-color:red; border-radius:15px;");
        deleteButton.setAttribute("onclick" ,"deleteService(" + service.serviceNum + ")");
        deleteButton.innerHTML = "Delete";
        cell.appendChild(deleteButton);
        
        var restartButton = document.createElement("button");
        restartButton.setAttribute("class" ,"blackRight");
        restartButton.setAttribute("style" ,"position:relative; left:10px; background-color:orange; border-radius:15px;");
        restartButton.setAttribute("onclick" ,"restartService(" + service.serviceNum + ")");
        restartButton.innerHTML = "Restart";
        cell.appendChild(restartButton);
        
        var redeployButton = document.createElement("button");
        redeployButton.setAttribute("class" ,"blackRight");
        redeployButton.setAttribute("style" ,"position:relative; left:10px; background-color:yellow; border-radius:15px;");
        redeployButton.setAttribute("onclick" ,"redeployService(" + service.serviceNum + ")");
        redeployButton.innerHTML = "Redeploy";
        cell.appendChild(redeployButton);
}
