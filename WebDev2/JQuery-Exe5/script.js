$(document).ready(function() {
    const textBox = $(".textBox");
    const addTask = $("#addTask");
    const notCompleted = $(".notCompleted");
    const completed = $(".completed");
  
    addTask.click(function() {
      const task = textBox.val().trim();
  
      if (task === "") {
        alert("Error: Please enter a task first");
      } else {
        alert(`New Task: ${task}`);
        const taskElement = $("<div class='task'></div>").text(task);
        const checkbox = $("<input type='checkbox' class='checkbox'>");
        taskElement.append(checkbox);
        notCompleted.append(taskElement);
        textBox.val("");
      }
    });
  });
  