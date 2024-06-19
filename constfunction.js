const storage=5020


if (localStorage.getItem("drive")){
    alert("Thank you for using Windows Infinite and changing to the new Unity! ( PS: Apparently local storage is the same for ALL OVER SOLOLEARN, so dont input passwords here )")
    localStorage.clear()
}


// Jquery stuff 

$('.gui').toggle()
$('#shell-container').hide()

// KERNAL

class Process {
  constructor(name, code, isSystem = false) {
    this.name = name;
    this.code = code;
    this.state = 'ready';
    this.isSystem = isSystem;
  }

  run() {
    if (this.isSystem) {
      console.log(`System process ${this.name} is running: ${this.code}`);
    } else {
      this.state = 'running';
      try {
        eval(this.code); // This executes the code
      } catch (error) {
        console.error(`Error in process ${this.name}: ${error}`);
      } finally {
        this.state = 'terminated';
      }
    }
  }
}

class Scheduler {
  constructor() {
    this.processes = []; // Array to store process objects
    this.runningProcesses = [];
  }

  addProcess(process) {
    this.processes.push(process); // Store the process object
  }

  runProcesses() {
    while (this.processes.length > 0) {
      const process = this.processes.shift();
      this.runningProcesses.push(process);
      process.run();
    }
  }

  stopRunningProcess(processName) {
    const index = this.runningProcesses.findIndex(process => process.name === processName);
    if (index !== -1) {
      const stoppedProcess = this.runningProcesses.splice(index, 1)[0]; // Remove the process from runningProcesses

      if (!stoppedProcess.isSystem) {
        // If it's not a system process, don't remove it from this.processes
        stoppedProcess.state = 'terminated';
      }

      
      heartbeat(processName,true);
    } else {
      
    }
  }

  getRunningProcesses() {
    return this.runningProcesses.map(process => process.name);
  }
}


const kernel = {
  scheduler: new Scheduler(),
  boot() {
    console.log('Kernel is booting...');
  },
  execute() {
    this.scheduler.runProcesses();
  },
  stopRunningProcess(taskName) {
    this.scheduler.stopRunningProcess(taskName);
  },
  getRunningTasks() {
    return this.scheduler.getRunningProcesses();
  }
};



function initFileSystem() {
  localStorage.setItem('root', JSON.stringify({}));
}

// Function to create a directory
function createDirectory(path) {
  const directories = JSON.parse(localStorage.getItem('root'));
  const parts = path.split('/');
  let current = directories;

  for (const part of parts) {
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }

  localStorage.setItem('root', JSON.stringify(directories));
}

// Function to create a file with content
function createFile(path, content, extension) {
  const directories = JSON.parse(localStorage.getItem('root'));
  const parts = path.split('/');
  const fileName = parts.pop();
  let current = directories;

  for (const part of parts) {
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }

  if (!current[fileName]) {
    current[fileName] = {
      content: content,
      extension: extension || 'txt',
    };
  }

  localStorage.setItem('root', JSON.stringify(directories));
}

// Function to list the contents of a directory
function listDirectoryContents(path) {
  const directories = JSON.parse(localStorage.getItem('root'));
  const parts = path.split('/');
  let current = directories;

  for (const part of parts) {
    if (current[part]) {
      current = current[part];
    } else {
      console.log('Directory not found.');
      return;
    }
  }

  if (typeof current === 'object') {
    const contents = Object.keys(current);
    console.log(contents);
  }
}

// Function to get the content or extension of a file
function getFileContentOrExtension(path, choice) {
  const directories = JSON.parse(localStorage.getItem('root'));
  const parts = path.split('/');
  const fileName = parts.pop();
  let current = directories;

  for (const part of parts) {
    if (current[part]) {
      current = current[part];
    } else {
      console.log('Directory not found.');
      return;
    }
  }

  if (current[fileName] && current[fileName][choice]) {
    return current[fileName][choice];
  } else {
    console.log('File not found or choice invalid.');
  }
}

// Function to create a directory if it doesn't already exist
function createDirectory(path) {
  const directories = JSON.parse(localStorage.getItem('root'));
  const parts = path.split('/');
  let current = directories;

  for (const part of parts) {
    if (!current[part]) {
      current[part] = {};
    }
    current = current[part];
  }

  localStorage.setItem('root', JSON.stringify(directories));
}


function init(){

ifexist=(localStorage.getItem("root/documents"))
if (ifexist == "" && ifexist == null){
    

initFileSystem();
createDirectory('root/documents');
listDirectoryContents('root/documents');

boot()

}
else{
    boot()
    return

}
}

function terminalwrite(text) {
  const body = document.body;
  const newText = document.createTextNode(text);
  const newParagraph = document.createElement("p");
  newParagraph.style.color = "white"; // Set text color to white
  newParagraph.appendChild(newText);
  body.appendChild(newParagraph);
}


function boot(arg){
    $('.gui').hide()
$('#shell-container').hide()
    try{

    eval(localStorage.getItem("startup"))

    $(window).on("beforeunload", function () {
    return "To prevent losing unsaved data you should save before leaving";
});
    terminalwrite("[ KRNL ] Starting SystemMGR")
    const sysprocess = new Process('system', 'setTimeout(function(){ addkrnl() },3000)');

kernel.boot();
kernel.scheduler.addProcess(sysprocess);

function beep() {
  (new
	Audio(
	"data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+ Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ 0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7 FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb//////////////////////////// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
	)).play();
}

beep()

terminalwrite("[ KRNL ] Started KRNL from KRNL loader")
terminalwrite("[ KRNL ] Starting GUI")
const gui = new Process('gui', 'gui_load()');
kernel.scheduler.addProcess(gui);

kernel.execute();
    }
    catch{
        function start(){
    js_mode=0
    document.body.style.backgroundColor="black"

    function terminalwrite(msg){
        msg1 = document.createElement("p")
        msg1.style.color="white"
        msg1.innerHTML=msg 
        document.body.appendChild(msg1)
    }

    function terminalInput(){
        msg1 = document.createElement("p")
        msg1.style.color="white"
        msg1.id = "input"
        document.body.appendChild(msg1)
    }



    terminalwrite("SK v1")
    terminalwrite("=== READY ===")
    terminalwrite("Use help or use a command")
    terminalwrite("Note: If your seeing this then there was a error when trying to boot, please utilize help and gui_load()")

    terminalInput()

    outputElement = document.getElementById('input');

    document.addEventListener('keydown', (event) => {
      if (event.key == "Enter"){
          query = outputElement.textContent;

          if (js_mode == 1){
              result = eval(query)
              terminalwrite(result)
          }

          

          if (query == "help"){
              terminalwrite("HELP | Commands: \n loadurl('url-goes-here') Loads a HTML document | loadjs  Loads JS")
          }
          if (query == "loadjs"){
             terminalwrite("Making terminal run off JS")
             js_mode=1    
          }

          if (query.startsWith("loadurl(\"")){
              query=query.replace("loadurl(\"","")
              query.replace("\")")
              document.body.style.height = '100%';
document.documentElement.style.height = '100%';

document.body.innerHTML = `<iframe style="height: 100%; width: 100%;" src="${query}"></iframe>`;

          }

          outputElement.id=""
          outputElement=null

          terminalInput()
          outputElement = document.getElementById('input');
          
      }
      if (event.key === "Backspace") {
        // Remove the last character when Backspace is pressed
        outputElement.innerHTML = outputElement.textContent.slice(0, -1);
      } else if (event.key.length === 1) {
        // Append printable characters to the output
        outputElement.innerHTML += event.key;
      }
    });

}
start()

    }
}

function addkrnl(){
let bsodErrorCount = 0; // For snapshot-related errors
let maxBSODErrorCount = 20;
let errorCount = 0;
const maxErrorCount = 5;
const errorHistory = [];
let snapshot_try = 0;
let maxSnapshots = 10; // Maximum number of snapshots to keep
let snapshots = [];

// Initialize the notification system
function notify(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.background = 'rgba(0, 0, 0, 0.7)';
    notification.style.color = '#fff';
    notification.style.position = 'fixed';
    notification.style.bottom = '10px';
    notification.style.right = '10px';
    notification.style.zIndex = '9999';
    notification.style.padding = '10px';
    notification.style.borderRadius = '5px';
    document.body.appendChild(notification);
    setTimeout(() => {
        document.body.removeChild(notification);
    }, 5000);
}

function krnl_logEvent(message) {
    console.log("[KRNL] " + message);
    notify("[KRNL] " +message);
}

function shell(){
    $("#gui").hide()
    $("#shell-container").show()
    // Create shell container element
const container = document.getElementById('shell-container');

// Create input prompt element
const prompt = document.createElement('span');
prompt.className = 'prompt';
prompt.textContent = '> ';

container.appendChild(prompt);

// Create command output area element
const outputArea = document.createElement('pre');
outputArea.id = 'command-output';

container.appendChild(outputArea);

// Handle user input on Entr key press event
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
       const commandInput = prompt.nextSibling.textContent.trim();
       
       // Execute command based on user input here...
       
       // Clear input after execution or display error message if invalid command.
       prompt.nextSibling.textContent = '';
   }
});
}
window.addEventListener("error", function (event) {
    errorCount++;
    const error = event.error;

    errorHistory.push(error);

    if (errorCount >= maxErrorCount) {
        snapshot_try++;
        krnl_logEvent(`Snapshot attempt #${snapshot_try}`);

        if (snapshot_try > 5) {
            shell()
            return;
        }

        if (snapshots.length > 0) {
            const lastSnapshot = snapshots[snapshots.length - 1];
            document.body.outerHTML = lastSnapshot.html;
            krnl_logEvent(`Loaded last snapshot taken at ${lastSnapshot.time}`);
            errorCount = 0;
        } else {
            krnl_logEvent("Cannot find a snapshot to load");
        }
    }

    if (error instanceof ReferenceError) {
        krnl_handleReferenceError(event);
    }
    if (error instanceof SyntaxError) {
        krnl_handleSyntaxError(event);

        // Increment the BSOD error count on syntax errors
        bsodErrorCount++;
    }

    // Reset the BSOD error count if we're not continuously getting snapshot-related errors
    if (errorCount < maxErrorCount) {
        bsodErrorCount = 0;
    }
});

function krnl_handleSyntaxError(event) {
    const error = event.error;
    krnl_logEvent(`Syntax error: ${error.message}`);
    krnl_logEvent("Cannot resolve syntax-related errors.");
}

function krnl_handleReferenceError(event) {
    const error = event.error;
    const variableName = error.message.split(" is not defined")[0];
    krnl_logEvent(`Handling ReferenceError: '${variableName}' is not defined.`);

    const codeToRerun = event.target.outerHTML;

    window[variableName] = undefined;
    krnl_logEvent(`Defined '${variableName}' as undefined.`);

    const codeLines = codeToRerun.split('\n');
    for (let i = 0; i < codeLines.length; i++) {
        try {
            eval(codeLines[i]);
        } catch (rerunError) {
            krnl_logEvent("Error while rerunning the line: " + rerunError);
        }
    }
}

function displayBSOD() {
    document.body.innerHTML = '<div style="height: 100%; width: 100%; background-color: #0078d4; color: #fff; text-align: center; padding: 20px; font-family: Arial, sans-serif;"> [ KRNL ] Snapshot limit reached <br> [ KRNL ] Failure threshold reached </div>';
}

function takeSnapshot() {
    const snapshotTime = new Date();
    const snapshotData = {
        time: snapshotTime,
        html: document.body.outerHTML
    };

    // Remove old snapshots if we exceed the maximum
    if (snapshots.length >= maxSnapshots) {
        snapshots.shift(); // Remove the oldest snapshot
    }

    snapshots.push(snapshotData);
    krnl_logEvent(`Snapshot taken at ${snapshotTime}`);
}

function loadSnapshot(snapshotIndex) {
    if (snapshotIndex >= 0 && snapshotIndex < snapshots.length) {
        const snapshotData = snapshots[snapshotIndex];
        document.body.outerHTML = snapshotData.html;
        krnl_logEvent(`Loaded snapshot taken at ${snapshotData.time}`);
    } else {
        krnl_logEvent("Invalid snapshot index");
    }
}

function clearSnapshots() {
    snapshots.length = 0;
    krnl_logEvent("Snapshots cleared");
}

function clearErrorHistory() {
    errorHistory.length = 0;
    krnl_logEvent("Error history cleared");
}

krnl_logEvent("Snapshot subsystem initialized");
takeSnapshot(); // Initial snapshot when the system is initialized

}


function gui_load(){
    setTimeout(function(){
     $("p").remove()
    $('.gui').toggle()




// Get all elements with the id "para"
var elements = document.querySelectorAll('#para');

// Remove each element with the id "para"
elements.forEach(function(element) {
  element.parentNode.removeChild(element);
});


    // Set background 

    try{
        document.body.style.backgroundImage = localStorage.getItem("root/sysimg/background.png")
    }
    catch{

    }

    // none of that worked tbh

    // well lets at lets test whatever
   



    },3000)
    // make bg #008080

}

// Load all files in the /documents 

// Prevent accidental leaving 



// Now that all that system stuff is out of the way

// Context menu go fire 


// Function to create a menu item
function createMenuItem(text) {
  var li = document.createElement('li');
  li.innerText = text;
  return li;
}

// Time time?

const systime = new Process('systime', 'setInterval(function(){document.getElementById("time").innerHTML=new Date().toLocaleTimeString()})');

kernel.scheduler.addProcess(systime);


// Create shell container element


function createWindow(name, htmlContent) {
    process = new Process(name, 'setInterval(function() { heartbeat("' + name + '"); }, 2000)');
    kernel.scheduler.addProcess(process);

    const win95Window = document.createElement('div');
    win95Window.classList.add('win95-window');
    win95Window.id = name;

    const titleBar = document.createElement('div');
    titleBar.classList.add('win95-titlebar');
    titleBar.innerHTML = name;

    const menuBar = document.createElement("div")
    menuBar.classList.add("iteminthing")
    menuBar.innerHTML = name

    // Add a mousedown event listener to the title bar for dragging
    titleBar.addEventListener('mousedown', startDragging);

    const closeButton = document.createElement('span');
    closeButton.classList.add('win95-close-button');
    closeButton.innerHTML = 'X';
    closeButton.onclick = function () {
        $(win95Window).remove();

        // Kill the process
        kernel.stopRunningProcess(name);
    };

    titleBar.appendChild(closeButton);

    const content = document.createElement('div');
    content.classList.add('win95-content');
    content.innerHTML = htmlContent;

    win95Window.appendChild(titleBar);
    win95Window.appendChild(content);

    // Add a resize handle in the bottom-right corner
    const resizeHandle = document.createElement('div');
    resizeHandle.classList.add('resize-handle');
    win95Window.appendChild(resizeHandle);

    document.body.appendChild(win95Window);

    kernel.execute();

    if (win11 == 1){
        // Get all the elements in the document
const allElements = document.querySelectorAll('*');

// Loop through each element and set the border radius to 5px
allElements.forEach(element => {
  element.style.borderRadius = '5px';
});

    }
    else{
        // Get all the elements in the document
const allElements = document.querySelectorAll('*');

// Loop through each element and set the border radius to 5px
allElements.forEach(element => {
  element.style.borderRadius = '0px';
});

    }





    function startDragging(e) {
        let isDragging = false;
        const initialX = e.clientX - win95Window.getBoundingClientRect().left;
        const initialY = e.clientY - win95Window.getBoundingClientRect().top;

        document.addEventListener('mousemove', dragWindow);
        document.addEventListener('mouseup', stopDragging);

        function dragWindow(e) {
            if (!isDragging) {
                isDragging = true;
            }

            const newX = e.clientX - initialX;
            const newY = e.clientY - initialY;

            win95Window.style.left = newX + 'px';
            win95Window.style.top = newY + 'px';
        }

        function stopDragging() {
            if (isDragging) {
                isDragging = false;
                document.removeEventListener('mousemove', dragWindow);
                document.removeEventListener('mouseup', stopDragging);
            }
        }
    }

    // Resize the window by dragging the bottom-right corner
    resizeHandle.addEventListener('mousedown', startResizing);

    function startResizing(e) {
        let isResizing = false;
        const initialX = e.clientX;
        const initialY = e.clientY;
        const initialWidth = win95Window.offsetWidth;
        const initialHeight = win95Window.offsetHeight;

        document.addEventListener('mousemove', resizeWindow);
        document.addEventListener('mouseup', stopResizing);

        function resizeWindow(e) {
            if (!isResizing) {
                isResizing = true;
            }

            const newWidth = initialWidth + (e.clientX - initialX);
            const newHeight = initialHeight + (e.clientY - initialY);

            win95Window.style.width = newWidth + 'px';
            win95Window.style.height = newHeight + 'px';
        }

        function stopResizing() {
            if (isResizing) {
                isResizing = false;
                document.removeEventListener('mousemove', resizeWindow);
                document.removeEventListener('mouseup', stopResizing);
            }
        }
    }
}

function cloak(){
    code = document.documentElement.outerHTML;
	   var win = window.open();
	   win.document.write(code);
}
heartcheck = {};
function heartbeat(name, kill) {


    // Check if the function is regularly being called by a program
    const lastCallTime = heartcheck[name];
    const currentTime = Date.now();
    const timePassed = currentTime - lastCallTime;
    
    if (timePassed > 3000 ) { // 3000 milliseconds = 3 seconds
      // Take action if the function hasn't been called in more than 3 seconds
      console.log(name + " heartbeat not received, wiping");
      const element = document.getElementById(name);


      if (element) {
        element.remove();
    
      } else {
        
      }
    }
    if (kill == true) { // 3000 milliseconds = 3 seconds
      // Take action if the function hasn't been called in more than 3 seconds
      const element = document.getElementById(name);
      if (element) {
        element.remove();
        
      } else {
        
      }
    }


  
    // Update the last call time for the function
    heartcheck[name] = Date.now();
}


var niko = 0; // Default: 0

if (niko == 1) {
    function getRandomName() {
        const characterGroups = ["n", "i", "k", "o"];
        const nameLength = Math.floor(Math.random() * 10) + 1; // Random name length between 1 and 10 characters
        let result = "";

        for (const group of characterGroups) {
            const charCount = Math.floor(Math.random() * (nameLength + 1));
            result += group.repeat(charCount);
        }

        // Shuffle the characters to make it random
        result = result.split("");
        for (let j = result.length - 1; j > 0; j--) {
            const randomIndex = Math.floor(Math.random() * (j + 1));
            [result[j], result[randomIndex]] = [result[randomIndex], result[j]];
        }

        return "";
    }

    function createNikoElement() {
        var nikoElement = document.createElement("div");
        var nikoName = getRandomName();

        var nikoImage = document.createElement("img");
        nikoImage.src = "https://media.discordapp.net/attachments/1118733729662255156/1169739200489340938/ezgif.com-gif-maker_4.gif?ex=65567f86&is=65440a86&hm=d7b19a01ca9488d0e8367e28d87d5babc0cfd7aa5ae06d254b405acf0b67d2ec&=";
        nikoImage.style.width = "40px";
        nikoImage.style.borderRadius = "5px";

        var nameText = document.createElement("p");
        nameText.innerText = nikoName;
        nameText.style.position = "absolute";
        nameText.style.bottom = "45px"; // Adjust the position of the name

        nikoElement.appendChild(nikoImage);
        nikoElement.appendChild(nameText);

        nikoElement.style.position = "absolute";
        nikoElement.onclick = speak; // Assign the function to onclick
        document.body.appendChild(nikoElement); // Append to the body

        var targetX, targetY;
        var speed = 2; // Adjust the speed as needed
        var currentDirection = ""; // Track the current movement direction

        function moveNikoSmoothly() {
            targetX = Math.floor(Math.random() * (window.innerWidth - 40));
            targetY = Math.floor(Math.random() * (window.innerHeight - 40));
            smoothMove();
        }

        function speak() {
            var msg = ["I still don't pay my taxes!", "Why am I in this OS?", "Got any games on your phone?"];
            var choice = Math.floor(Math.random() * msg.length); // Fix the range of random choice
            say(nikoName, msg[choice]);
        }

        function say(name, msg) {
            var msg1 = document.createElement("p");
            msg1.innerHTML = name + ": " + msg;
            document.body.appendChild(msg1); // Append to the body
            var done = "";
            var i = 0;
            var interval = setInterval(function () {
                if (i < msg.length) {
                    msg1.innerHTML = name + ": " + (done + msg[i]);
                    done = (done + msg[i]);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 100); // You can adjust the interval as needed
        }

        function smoothMove() {
            var currentX = parseInt(nikoElement.style.left) || 0;
            var currentY = parseInt(nikoElement.style.top) || 0;

            var dx = targetX - currentX;
            var dy = targetY - currentY;

            var newDirection = ""; // Track the new movement direction

            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 0) {
                    newDirection = "right";
                } else {
                    newDirection = "left";
                }
            } else {
                if (dy > 0) {
                    newDirection = "down";
                } else {
                    newDirection = "up";
                }
            }

            if (newDirection !== currentDirection) {
                currentDirection = newDirection;
                updateGif();
            }

            if (Math.abs(dx) < speed && Math.abs(dy) < speed) {
                nikoElement.style.left = targetX + "px";
                nikoElement.style.top = targetY + "px";
                moveNikoSmoothly();
            } else {
                var newX = currentX + (dx / Math.sqrt(dx * dx + dy * dy)) * speed;
                var newY = currentY + (dy / Math.sqrt(dx * dx + dy * dy)) * speed;

                nikoElement.style.left = newX + "px";
                nikoElement.style.top = newY + "px";

                requestAnimationFrame(smoothMove);
            }
        }

        function updateGif() {
            if (currentDirection === "right") {
                nikoImage.src = "https://media.discordapp.net/attachments/1118733729662255156/1169739200489340938/ezgif.com-gif-maker_4.gif?ex=65567f86&is=65440a86&hm=d7b19a01ca9488d0e8367e28d87d5babc0cfd7aa5ae06d254b405acf0b67d2ec&=";
            } else if (currentDirection === "left") {
                nikoImage.src = "https://media.discordapp.net/attachments/1118733729662255156/1169739201256902778/ezgif.com-gif-maker_2.gif?ex=65567f86&is=65440a86&hm=aef50a5f4626eb264ea70c29f047d66cc54c5a7dc79a0818083575a4811b58eb&=";
            } else if (currentDirection === "down") {
                nikoImage.src = "https://media.discordapp.net/attachments/1118733729662255156/1169739201596637305/ezgif.com-gif-maker_1.gif?ex=65567f86&is=65440a86&hm=80991afe7548389969e4c7e12b4902a80355952649b796c80e294f01381aa3ea&=";
            } else if (currentDirection === "up") {
                nikoImage.src = "https://media.discordapp.net/attachments/1118733729662255156/1169739200891990208/ezgif.com-gif-maker_3.gif?ex=65567f86&is=65440a86&hm=5409ac296d781a0782ea09ce3fe8cc1a9b915214248e62263019c84172107328&=";
            }
        }

        moveNikoSmoothly();
    }

    createNikoElement();
}

// totally not a easteregg

// Apps i guess



function terminal(){
    createWindow("Terminal",
    `
<div style="height: 100%;" id="body">
</div>

    `)


// Note: this isnt finished


// DEFAULT PASSWORD: "default"




// Commands:
/*


cat (filename)
ls
cd (directory) ( use -p for path )
edit (filename) (content)
nano (filename)
rm (filename)
apt update  // Not working as of now
apt upgrade // Not working as of now
neofetch // Does what you expect ( yea its built in, what you gonna do about it? )
firefox (website) // Exactly what you think
mkdir (name) // Makes a directory
touch (filename) // Makes a file


sudo username (username) // Changes username
sudo passwrd (new password) // Changes password


sudo (command) // Requires password


*/




// SRV Kernel v1


const kernel = {
 processes: [],
 version: 1.2,
 processAdd: function (name, task, onetime) {
   name=(name+"=?|?="+task)
   this.processes.push(name);
 },
 baseLoad: function(html){
     document.getElementById("body").innerHTML=html
 },
 errorHandle: function(){
     // Attach an event listener to the window object to listen for errors
window.addEventListener('error', function(event) {
 // Handle the error here
 document.getElementById("body").innerHTML="Kernal Panic!"
 document.getElementById("body").style.backgroundColor="black"
 document.getElementById("body").style.color="white"
 console.warn("Kernel panic!:", event.error);
     kernel.halted = true;
     for (var item in kernel.processes) {
       console.log(`Kernel: Killing ${(kernel.processes[item].split("=?|?="))[0]}`);
     }
     console.warn("Completed")
});


 },
 processRemove: function(name){
     new1=[]
     for (item in this.processes){
         tool=this.processes[item]
         tool.split("=?|?=")
         if (tool[0] == name){
             continue
         }
         else{
             new1.push(this.processes[item])
         }
     }
     this.processes=new1


 },
 execute: function(){
     if (this.halted == true){
       return
   }
     taskmain = setInterval(() => this.taskRunner(this.processes), 500);
 },
 taskRunner: function(task) {
   if (this.halted == true){
       return
   }
   for (item in task){
       console.log(this.halted)
       task1=task[item].split("=?|?=")
       eval(task1[1])
   }


 },


 getFile: function(path){
     if (this.halted == true){
       return
   }
     return (localStorage.getItem(path))
 },
 makeFile: function(path,content){
     if (this.halted == true){
       return
   }
     new1=path.split("/")
     arx = new1.length
    
     new2 = 0


     newp=""


     while (new2 < arx){


         if (new1[new2] == new1[arx - 1]){
             new2++
             continue
         }
         newp=(newp+new1[new2] + "/")
         new2++
     }
     if (localStorage.getItem(newp) == null){
         old=""
     }
     else{
         old=localStorage.getItem(newp)
     }
     //console.log(newp)
     localStorage.setItem(newp,(old + "," + path))
     localStorage.setItem(path,content)




 }
};




// System


// Default password:


password = "none"




function start(type){
   kernel.errorHandle()
   kernel.processAdd("system","time=new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });")
   document.getElementById("body").innerHTML="<div id='terminal'></div>"
   document.getElementById("body").style.backgroundColor="black"
   document.getElementById("body").style.color="white"


   function terminalWrite(msg, id){
      // Check if the element with ID "terminal" exists
var terminalElement = document.getElementById("terminal");
   // Create a new span element
   var txt = document.createElement("span");


   // Set innerHTML of the span element
   txt.innerHTML = msg;
   txt.id=id


   // Append the span element to the "terminal" element
   terminalElement.appendChild(txt);


   br=document.createElement("br")
   terminalElement.append(br)
   }




  


   terminalWrite("<div style='color: orange;'> Unity OS | SRV Kernel v1")
   terminalWrite("Starting processes...")
   terminalWrite("[<div style='color: green;  display: inline;'> OK </div>] User input started")
function triggerKeyPress(key) {
   var event = new KeyboardEvent('keydown', {
     key: key,
     bubbles: true,
     cancelable: true,
   });
   document.dispatchEvent(event);
 }
isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
isMobile=false
if (isMobile) {
   alert("This code is meant for PC but i tried making it a little fucntional on mobile, so heres a weird virtual keyboard")
 // Code to execute if the user is on a mobile device
 const keyboard = document.createElement("div");
 keyboard.classList.add("keyboard");
 //keyboard.id = "keyboard";


 const rows = [
   "QWERTYUIOP",
   "ASDFGHJKL",
   "ZXCVBNM",
   "Ctrl,.",
   "Enter"
 ];


 rows.forEach(row => {
   const rowDiv = document.createElement("div");
   row.split("").forEach(key => {
     const keyDiv = document.createElement("div");
     keyDiv.classList.add("key");
     keyDiv.textContent = key;
     keyDiv.onclick = function () {
       triggerKeyPress(key);
     };
     rowDiv.appendChild(keyDiv);
   });
   keyboard.appendChild(rowDiv);
 });


 document.getElementById("body").appendChild(keyboard);
} else {
 // Code to execute for non-mobile devices
}




   if (localStorage.getItem("root") == null){


       indexbin=`neofetch,none,hat`
       neofetch=(`
           if (query == "neofetch"){
       terminalWrite(\`
<div style="display: inline; color: purple; background-color: ;">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣠⣤⣤⣤⣤⣤⣴⢶⣲⣖⣦⢶⣖⣦⣦⣤⣤⣤⣤⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠠⣶⣿⣿⣟⣯⣿⢯⣿⣯⡿⣯⡷⣿⣽⣻⣾⣳⣯⣟⣷⣻⢾⣽⣻⢿⣽⣻⣷⡄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢿⣿⣷⣿⣯⣿⣻⣽⣿⣽⢷⣿⣻⢾⡷⣯⣷⣟⣾⣷⣻⣿⣾⣽⣿⣾⣿⣿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣀⣤⣤⣶⣶⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣶⣶⣤⣄⣀⠀⠀⠀⠀
⠀⣠⣴⣿⣿⣿⣿⣿⣿⡇⠈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠁⢸⣿⣿⣿⣿⣿⣿⣦⡄⠀
⢠⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠉⠉⠉⠙⠋⠛⠋⠋⠉⠉⠉⠉⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⡆
⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿⢿⣟⣿⣿⣿⠁
⠀⠀⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣤⣄⣀⣀⠀⠀⠀⣀⣀⣀⣠⣤⣴⣶⣿⣿⣿⣿⣿⡿⣽⣿⣻⣯⠟⠁⠀
⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢿⣽⠾⠋⠁⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠛⠉⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⠛⠻⠟⠛⠛⠛⠛⠛⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
</div>
Cynex OS | SRV Kernel v1
Kernel Version: ${kernel.version}
⠀⠀⠀


       \`)
   }`)
      
   terminalWrite("[<div style='color: red;  display: inline;'> FAIL </div>] No directories detected")
   terminalWrite("[<div style='color: yellow;  display: inline;'> WAIT </div>] Installing...")


   localStorage.setItem("root","")
   kernel.makeFile("root/home","")
   kernel.makeFile("root/home/welcome.txt","Hi")
   kernel.makeFile("root/packages","")
kernel.makeFile("root/home/user", "")
kernel.makeFile("root/var", "")
kernel.makeFile("root/var/www", "")
kernel.makeFile("root/var/log", "")
kernel.makeFile("root/etc", "")
kernel.makeFile("root/etc/config.ini","user1_=_default")
kernel.makeFile("root/usr", "")
kernel.makeFile("root/usr/bin", "")
kernel.makeFile("root/usr/lib", "")
kernel.makeFile("root/etc","")
kernel.makeFile("root/etc/packages","")
kernel.makeFile("root/etc/packages/index.bin",indexbin)
kernel.makeFile("root/etc/packages/neofetch.bin",neofetch)
kernel.makeFile("root/bin","")
kernel.makeFile("root/bin/boot","")
kernel.makeFile("root/bin/boot/kernel.bin",`
const kernel={processes:[],processAdd:function(n,t,o){n=(n+"=?|?="+t),this.processes.push(n)},baseLoad:function(e){document.getElementById("body").innerHTML=e},errorHandle:function(){window.addEventListener("error",function(e){document.getElementById("body").innerHTML="Kernal Panic!",document.getElementById("body").style.backgroundColor="black",document.getElementById("body").style.color="white",console.warn("Kernel panic!:",e.error),kernel.halted=!0,kernel.processes.forEach(function(e){console.log("Kernel: Killing "+(e.split("=?|?="))[0])}),console.warn("Completed")})},processRemove:function(n){new1=[];for(item in this.processes){tool=this.processes[item],tool.split("=?|?="),tool[0]==n?void 0:new1.push(this.processes[item])}this.processes=new1},execute:function(){this.halted!=0&&setTimeout(()=>this.taskRunner(this.processes),500)},taskRunner:function(t){this.halted!=0&&t.forEach(function(t){console.log(kernel.halted),t1=t.split("=?|?="),eval(t1[1])})},getFile:function(n){return this.halted!=0?void 0:localStorage.getItem(n)},makeFile:function(n,e){if(this.halted!=0)return;new1=n.split("/"),arx=new1.length,new2=0,newp="";while(new2<arx)new1[new2]==new1[arx-1]?new2++:newp=(newp+new1[new2]+"/"),new2++;localStorage.getItem(newp)==null?old="":old=localStorage.getItem(newp),localStorage.setItem(newp,old+","+n),localStorage.setItem(n,e)}};
`)
kernel.makeFile("root/bin/boot/terminal.bin", start.toString())
kernel.makeFile("root/bin/boot/assembler.bin",`




krnl=document.createElement("script")
krnl.innerHTML=(localStorage.getItem("root/bin/boot/kernel.bin"))
document.getElementById("body").appendChild(krnl)


jquery=document.createElement("div")
jquery.innerHTML="https://code.jquery.com/jquery-3.6.4.min.js"


terminal=document.createElement("script")
terminal.innerHTML=(localStorage.getItem("root/bin/boot/terminal.bin"))


document.getElementById("body").appendChild(terminal)


try{
setTimeout(function(){
   start()
},500)
}
catch{
   recovery=localStorage.getItem("root/bin/boot/recovery.bin")
   localStorage.setItem("root/bin/boot/terminal.bin",recovery)
}






`)


   kernel.makeFile("root/system/config.ini","")
   terminalWrite("[<div style='color: green;  display: inline;'> OK </div>] Installed")
   }
   path="root/home/user"
   function loop(){






   let outputCounter = 1; // Variable to keep track of output boxes
args=""
           let data = localStorage.getItem("root/etc/config.ini").split("_=_");
           let user = data[0];
           let password = data[1];






hyjack=0
lockout=0
terminalWrite(("<div style='display: inline; color: gree;'>" + user + "</div> " + path+" >"), (`output${outputCounter}`))
outputDiv = document.getElementById(`output${outputCounter}`)
document.addEventListener('keydown', function(event) {
 // Exclude Shift and Space
 if (event.key !== 'Shift'  && event.key.length === 1) {
   // Append the pressed key to the div
   if (lockout == 1){
       return
   }
   outputDiv.textContent += event.key;
 } else if (event.key === "Backspace") {
   // Handle Backspace to delete the last character
   const promptText = user + " " + path + " >";
   const currentText = outputDiv.textContent;


   if (currentText.length <= promptText.length) {
       // Ensure that the remaining text won't be shorter than the prompt
       return;
   } else {
  


       // Delete the last character
       outputDiv.textContent = currentText.slice(0, -1);
   }
}
else if (event.key === 'Enter') {
   // Get the content of the output div
   query = outputDiv.textContent;


   query=query.replace((user +" "+path+" >"),"")


   if (hyjack == 1){
       if (query == password){
           old=path
           path="root/"
           query=args
           terminalWrite("[SUDO] Correct password")
           lockout=1
           setTimeout(function(){
               path=old
               lockout=0
                 terminalWrite(("<div style='display: inline; color: ;'>" + user + "</div> " + path + " >"), `output${outputCounter}`);
   outputDiv = document.getElementById(`output${outputCounter}`);
           },25)
       }
       else{
           terminalWrite("[SUDO] Invalid password")
           path="root/home"
           return
       }
       hyjack=0
   }




   // Increment the counter for the next output box
   outputCounter++;


   // run commands


   if (query.startsWith("sudo ")) {
   terminalWrite("[SUDO] Input password for User1");
   hyjack = 1;
   args = query.replace("sudo ", "");
   terminalWrite(`<div style='display: inline; color: ;'>${user}</div> ${path} >`, `output${outputCounter}`);
   outputDiv = document.getElementById(`output${outputCounter}`);
   return;


}
else if (query.startsWith("apt install")){
   terminalWrite("[<div style='color: yellow;  display: inline;'> WAIT </div>] Fetching onboard index ( /etc/packages/index.bin )")
   query=query.replace("apt install ","")
   data=localStorage.getItem("root/etc/packages/index.bin")
   try{
       data=data.split(",")
   }
   catch{
       terminalWrite("[<div style='color: red;  display: inline;'> FAIL </div>] Index not found or index corrupt ( /etc/packages/index.bin )")
       data=[]
   }
   work=0
   for (item in data){
       //console.log(query)
       //console.log(data[item])
       //console.log(data[item])
       terminalWrite(`[<div style='color: green;  display: inline;'> OK </div>] Found ${data[item]}`)
       if(data[item].includes(query)){
          
           newdoc=localStorage.getItem("root/packages/")
           if (newdoc != null){
           if (newdoc.includes(query)){
              terminalWrite(`[<div style='color: green;  display: inline;'> OK </div>] Requirements already satisfied ( ${data[item]} )`)
              break  
           }
           }


           terminalWrite(`[<div style='color: green;  display: inline;'> OK </div>] Found requested item ( ${data[item]} )`)
           work=1
           doc=localStorage.getItem("root/etc/packages").split(",")
           //console.log(doc)
           doc=[data[item]]
           if (doc.includes(data[item])){
               terminalWrite(`[<div style='color: yellow;  display: inline;'> WAIT </div>] Copying files... ( ${data[item]} )`)
               doc=localStorage.getItem(`root/etc/packages/${data[item]}.bin}`)
               console.log(`root/etc/packages/${data[item]}.bin`)
               kernel.makeFile(`root/packages/${data[item]}.bin`,localStorage.getItem("root/etc/packages/" + query + ".bin"))
               terminalWrite(`[<div style='color: green;  display: inline;'> OK </div>]  Copied( ${data[item]} )`)


           }
           else{
               terminalWrite(`[<div style='color: red;  display: inline;'> FAIL </div>] Questioned objects respective file is missing (CORRUPT?) (${query})`)
           }
       }
   }
   if (work == 0){
       terminalWrite(`[<div style='color: red;  display: inline;'> FAIL </div>] Questioned objects respective file is missing (CORRUPT?) (${query})`)
   }


}


else if (query.startsWith("mkdir ")){
       query=query.replace("mkdir ","")
       //console.log((path + "/" + query))
       kernel.makeFile((path  +"/"+ query),"")
       /nconsole.log((path  + query))
       terminalWrite("Directory made")
   }
   else if (query.startsWith("username")) {
   if (path === "root/") {
       // Remove "pswrd " from the beginning of the query
       const newPassword = query.replace("username", "");


       terminalWrite("Changed username to " + newPassword);


       // Retrieve and update the configuration
       let con = localStorage.getItem("root/etc/config.ini");
       let conParts = con.split("_=_");
       conParts[0] = newPassword;


       localStorage.setItem("root/etc/config.ini", conParts.join("_=_"));
   } else {
       terminalWrite("The command must be run with root privilege");
   }
}
   else if (query.startsWith("passwrd")) {
   if (path === "root/") {
       // Remove "pswrd " from the beginning of the query
       const newPassword = query.replace("passwrd ", "");


       terminalWrite("Changed password to " + newPassword);


       // Retrieve and update the configuration
       let con = localStorage.getItem("root/etc/config.ini");
       let conParts = con.split("_=_");
       conParts[1] = newPassword;


       localStorage.setItem("root/config.ini", conParts.join("_=_"));
   } else {
       terminalWrite("The command must be run with root privilege");
   }
}
   else if (query.startsWith("cd ")) {
 query = query.replace("cd ", "");


 if (query === "..") {
   // Navigate up one level
   const segments = path.split("/");
   segments.pop(); // Remove the last segment (current directory)
   const newPath = segments.join("/");


   // Check if the new path is within the allowed scope (e.g., not outside the root directory)
   if (newPath.startsWith("root/") && newPath !== "root/") {
     path = newPath;
   } else {
     terminalWrite("Access denied");
   }
 } else {


   if (query[query.length - 4] === ".") {
     terminalWrite("You cannot change directory into a file");
   } else if (query === "root/") {
     terminalWrite("Denied");
   } else {
     const fullPath = query.startsWith("-p ") ? query.replace("-p ", "") : path + "/" + query.replace("-p ", "");


     if (localStorage.getItem(fullPath) === null) {
       terminalWrite("Invalid path");
     } else {
       if (query.startsWith("-p")) {
         path = fullPath;
       } else {
         path = fullPath;
       }
     }
   }
 }
}




   else if (query ==  "pwd"){
       terminalWrite(path)
   }
   else if (query.startsWith("rm ")) {
 const fileName = query.replace('rm ', '');
 const filePath = path + "/" + fileName;
  localStorage.removeItem(filePath)


 old = localStorage.getItem(path + "/")


 old=old.split(",")
 for (item in old){


     if (old[item] == filePath){
         old[item]=""


     }
 }
 localStorage.setItem((path + "/"),  old.map(String).join(","))
}




else if (query.startsWith("cat ")){
   query=query.replace("cat ","")
   terminalWrite(localStorage.getItem((path+"/"+query)))
}


   else if (query.startsWith("edit ")){
       query=query.replace("edit ","")
       new1 = query.split("-?-")
       localStorage.setItem((path + "/" +new1[0]),new1[1])
       terminalWrite("Wrote without failure")
   }
   else if (query.startsWith("touch ")){
       query=query.replace("touch ","")
       kernel.makeFile((path + "/" + query), "")
       terminalWrite((query) + " has been made in " + path)
   }
   else if (query.startsWith("clear")){
       localStorage.clear()
      
   }
   else if (query.startsWith("firefox")) {
   query = query.replace("firefox ", "");
   terminalWrite(`
       <div id="draggable-window" class="draggable-window">
           <span class="close-button" onclick="\$('#draggable-window').hide();">X</span>
           <iframe style="height: 100%; width: 100%;" src="https://${query}" id="out"></iframe>
       </div>
   `);


   }
   else if (query.startsWith("nano ")) {
 document.getElementById("body").innerHTML = `
   <center>
   <div class="nano-wrapper">
     <div class="nano-header">GNU Nano</div>
     <textarea id="editor" rows="15" cols="80"></textarea>
     <div class="nano-footer">
       <span class="nano-controls">^X Exit</span>
       <span class="nano-controls">^O Save</span>
     </div>
   </div>
   </center>
 `;


   const editor = document.getElementById('editor');


   // Handle keypress events
   editor.addEventListener('keydown', function (event) {
     // Handle the 'Ctrl + X' key combination to exit (you can add more key combinations)
     if (event.ctrlKey && event.key === 'x') {
       event.preventDefault();


       document.getElementById("body").innerHTML="<div id='terminal'></div>"
   document.getElementById("body").style.backgroundColor="black"
   document.getElementById("body").style.color="white"
        terminalWrite(("<div style='display: inline; color: ;'>" + user + "</div> " + path + " >"), `output${outputCounter}`);
        outputDiv = document.getElementById(`output${outputCounter}`);
      
     }
     if (event.ctrlKey && event.key === 'o') {
       event.preventDefault();
       alert('Saving content');
       // Save content to localStorage on 'Ctrl + O'
       localStorage.setItem(path + "/" +query.replace("nano ", ""), editor.value);
       console.log(query.replace("nano ", ""))
     }
   });


   // Load content from localStorage on page load


     editor.value=localStorage.getItem(path + "/" +query.replace("nano ", ""))
  
   return


 
  }else if (query == "apt upgrade"){
      lockout=1
      terminalWrite("[<div style='color: yellow;  display: inline;'> WAIT </div>] Updating system...")
      // http://totallynotacdn.free.nf/ver.txt
      fetch('https://totallynotacdn.free.nf/ver.txt')
 .then(response => response.text())
 .then(data => {
   // Store the update data in localStorage
   localStorage.setItem('root/bin/boot/terminal.bin', data);
  
   // Log "noice" to the console
   terminalWrite("[<div style='color: green;  display: inline;'> OK </div>] System updated restart to get newer version")
 })
 .catch(error => {
   terminalWrite("[<div style='color: red;  display: inline;'> FAIL </div>] Failed to update: " + error);
 });


  }
  if (query === "ls") {
   const items = localStorage.getItem(path + "/");
  
   if (!items) {
       terminalWrite("No items in directory");
   } else {
       const itemList = items.split(",");
       for (const item of itemList) {
           const itemName = item.replace(path + "/", "");
           terminalWrite(itemName);
       }
   }
}


   else{
       //terminalWrite("Command: " + query + " not found.")
       //try{
       //out = eval(query)
       //terminalWrite(out)
       //}
       //catch(error){
       //  terminalWrite(error.message)
       //}
   }


   try{
       doc=localStorage.getItem("root/packages/")
   doc=doc.split(",")
   for (item in doc){
       console.log(localStorage.getItem((path+"/"+doc[item]+".bin")))
       eval(localStorage.getItem((path+"/"+doc[item]+".bin")))
   }}
   catch{}


   // Create a new output div
   if (lockout == 1){
       return
   }
   terminalWrite(("<div style='display: inline; color: ;'>" + user + "</div> " + path + " >"), `output${outputCounter}`);
   outputDiv = document.getElementById(`output${outputCounter}`);




 }


});




   }


   setTimeout(function(){
      loop()
   },500)
  
  
}



start()




}

win11=0

function ubuntu(){
        if (document.getElementById("taskbar")){
            document.getElementById('taskbar').id = 'taskbar-ubuntu';
        }
        else{
            document.getElementById('taskbar-ubuntu').id = 'taskbar';
        }}
        
function windows11ify(){
    // Get all the elements in the document
const allElements = document.querySelectorAll('*');

// Loop through each element and set the border radius to 5px
allElements.forEach(element => {
  element.style.borderRadius = '5px';
});

win11=1

}

function customize(){
    createWindow("Customization",
    ` 
    <div>
    <center> <input placeholder="URL to image" id="imagecustomurl">
    <button onclick="createDirectory('sysimg'); createFile('sysimg/background', (document.getElementById('imagecustomurl').value), 'png')"> Select Image </button>
    <br>
    <button onclick="ubuntu()"> Ubuntu Toolbar </button>
    <button onclick="windows11ify()"> Make Windows 11 Type windows </button>
    </center>
    </div>
    ` )

}

// Initialize a cache object to store visited URLs and their contents
const urlCache = {};

function explorer() {
  createWindow("Internet Explorer", `
    <div id="navbar">
      <input id="urlInput" autocomplete="off" placeholder="Enter URL">
      <input type="checkbox" name="Enable Legacy" id="legacy">
      <button id="goButton" onclick="loadUrl()">Go</button>
    </div>
    <iframe id="webFrame"></iframe>
  `);
}

function loadUrl() {
  var url = document.getElementById("urlInput").value;
  if (url.startsWith("https://")) {
    // URL already starts with "https://"
  } else {
    url = "https://" + url;
  }


  // Check if legacy is on
  const myCheckbox = document.getElementById("legacy");
  let isChecked = myCheckbox.checked; // Use checked property to determine checkbox state

  if (isChecked === true) {
  var iframes = document.querySelectorAll('iframe'); // Use querySelectorAll instead of getElementsByTagName for better performance
  iframeIndex = 0; // Use a different variable name to avoid conflict with outer scope
  for (iframeIndex = 0; iframeIndex < iframes.length; iframeIndex++) {
    iframes[iframeIndex].style.width = '100%';
    iframes[iframeIndex].style.height = '100%';
    iframes[iframeIndex].src = url;
  }
  return
}

  if (isChecked) {
    var iframes = document.querySelectorAll('iframe'); // Use querySelectorAll instead of getElementsByTagName for better performance

    for (var i = 0; i < iframes.length; i++) {
      iframes[i].style.width = '100%';
      iframes[i].style.height = '100%';

      if (urlCache[url]) {
        // Use the cached content if available
        iframes[i].srcdoc = urlCache[url];
      } else {
        // Load the URL and cache the content
        fetchAndCacheUrl(url, iframes[i]);
      }
      
    }
  } else {
    // Clear the iframe content when the checkbox is not checked
    document.getElementById("webFrame").src = "about:blank";
  }
}

function fetchAndCacheUrl(url, iframe) {
  var apiUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url);

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.contents) {
        // Cache the content and load it in the iframe
        urlCache[url] = data.contents;
        iframe.srcdoc = data.contents;
      } else {
        document.getElementById("webFrame").src = "about:blank"; // Clear the iframe
        alert("Error: Unable to fetch the URL.");
      }
    })
    .catch(error => {
      console.error("Error fetching data:", error);
      document.getElementById("webFrame").src = "about:blank"; // Clear the iframe
      alert("Error: Unable to fetch the URL.");
    });
}

function settings() {
  alert("Please wait, settings are loading");
  let syl = 50;
  let fpsCount = [];
  let averageFPS = 0;

  // Create a PerformanceObserver to measure frame rates
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();

    for (const entry of entries) {
      const duration = entry.duration;
      if (duration > 0) {
        const fps = 1000 / duration;
        fpsCount.push(fps);
      }
    }

    // Calculate average FPS
    if (fpsCount.length > 0) {
      averageFPS = fpsCount.reduce((a, b) => a + b) / fpsCount.length;
      displaySettings();
    }
  });

  observer.observe({ entryTypes: ['render'] });

  // Trigger rendering
  render();

  function render() {
    if (syl > 0) {
      syl -= 1;
      requestAnimationFrame(render);
    }
  }

  function displaySettings() {
    let storage = 0; // Initialize storage variable
    const storedValue = window.localStorage.getItem("storage");

    if (storedValue !== null) {
      storage = JSON.parse(storedValue);
    }

    let html = `
      <div>
        <center>
          <h2>Settings</h2>
          <br>
          <p>FPS (Average): ${averageFPS.toFixed(2)}</p>
          <p>Storage: <span id="storage">${storage}</span> (If no storage is displayed then click the "Render Storage" button, do note that it will lag a lot)</p>
          <button onclick="getStorage()">Render Storage</button>
        </center>
      </div>
    `;

    createWindow("Settings", html);
  }
}

function getStorage() {
  let storage = window.localStorage;
  let totalSpace = 0;

  for (let key in storage) {
    if (storage.hasOwnProperty(key)) {
      const value = storage[key];
      const size = JSON.stringify(value).length * 2;
      totalSpace += size;
    }
  }

  console.log(`Total local storage space used: ${totalSpace} bytes`);

  // Get the maximum storage limit (Assuming the browser supports it)
  const maxStorageLimit = navigator?.storage?.estimate()?.then((result) => {
    console.log(`Maximum local storage limit: ${result.quota} bytes`);
  });
}



function taskmgr() {
   const runningTasks = kernel.getRunningTasks();

  const taskList = runningTasks.map((taskName) => `
    <li>
      ${taskName}
      <button onclick="killTask('${taskName}')">End Task</button>
    </li>
  `).join('');

  const taskManagerHTML = `
    <h1>Task Manager</h1>
    <div id="tasklist">
    <ul id="tasks">${taskList}</ul>
    </div>
  `;

  createWindow('Task Manager', taskManagerHTML);
}

// Function to kill a task
function killTask(taskName) {
   kernel.stopRunningProcess(taskName);
   // Update the page
   const runningTasks = kernel.getRunningTasks();
   document.getElementById("tasks").remove()
   updated = document.createElement("ul")
   const taskList = runningTasks.map((taskName) => `
    <li>
      ${taskName}
      <button onclick="killTask('${taskName}')">End Task</button>
    </li>
  `).join('');
   updated.innerHTML = taskList

   // Create the tasks thing again 
   updated.id="tasks"
   document.getElementById("tasklist").appendChild(updated)

}


function makefile(name, content) {
    createFile("/documents/" + name, content, "txt");
}

function notepad() {
    const html = `
    <div>
        <input placeholder="Filename" id="name">
        <button onclick="createFileFromInput()">Make a file</button>
        <br>
        <textarea id="textarea" placeholder="Input file content" style="height: 80%; width: 90%"></textarea>
    </div>
    `;

    createWindow("Notepad", html);
}

function createFileFromInput() {
    const name = document.getElementById('name').value;
    const content = document.getElementById('textarea').value;
    makefile(name, content);
}

function defender() {
  threat_count=0
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      try {
        // Attempt to evaluate the stored code in a safe environment
        const storedCode = localStorage.getItem(key);
        const result = Function('"use strict"; return ' + storedCode)();
        
        // You can add additional checks or actions here if needed
        if (result === undefined) {
          // The stored code is potentially malicious
          threat_count=(threat_count + 1)
          // You can choose to remove the key, log an alert, or take other action as needed
          localStorage.removeItem(key);
        }
      } catch (error) {
        // An error occurred, which may indicate malicious code
        console.error(`Error evaluating localStorage key: ${key}`);
        console.error(error);
        // You can choose to remove the key, log an alert, or take other action as needed
        // localStorage.removeItem(key);
      }
    }
  }

  html=`
  <div>
  <center>
  <h3> Defender </h3>
  <h4> Threats found: ${threat_count}</h4>
  <p> Re-open to rescan </p>
  </center>
  </div>
  `
  createWindow("Defender",html)
}

// Call the defender function to check for potentially malicious code in localStorage

function credits(){
    html=`
    <div>
    <center> <h3> Credits </h3>
    <p>Everything - Infdevv</p>
    <p>Tax Evasion - Waffle </p>
    `
    createWindow("Credits",html)
}

function interperete(code) {
    const isCodeValid = true; // Assuming isCodeValid is a boolean, make sure to define it.

    if (isCodeValid) {
        // If the code is valid, evaluate it
        try {
            // Define the code replacements as an array of objects
            const codeReplacements = [
                { find: /con\.print/g, replace: "console.log" },
                { find: /con\.warn/g, replace: "console.warn" },
                { find: /con\.error/g, replace: "console.error" },
                { find: /doc\.create/g, replace: "document.createElement" },
                { find: /doc\.edit\.style/g, replace: "style" },
                { find: /doc\.append/g, replace: "appendChild" },
                { find: /doc\.html/g, replace: "innerHTML" },
                { find: /var:/g, replace: "var " },
                { find: /if:/g, replace: "if " },
                { find: /elif:/g, replace: " else if " },
                { find: /else:/g, replace: " else " },
                { find: /end:/g, replace: "}" },
                { find: /for:/g, replace: "for (" },
                { find: /while:/g, replace: "while " },
                { find: /func/g, replace: "function" },
                { find: /\/\/:/g, replace: "// " },
                { find: /'/g, replace: '"' }
            ];

            // Apply the code replacements
            codeReplacements.forEach(replacement => {
                code = code.replace(replacement.find, replacement.replace);
            });

            return (eval(code));
        } catch (error) {
           
        }
    } else {
       
    }
}

function evalCommand(command) {
  try {
    const result = interperete(command);
    document.getElementById("output").textContent = result;
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error;
  }
}