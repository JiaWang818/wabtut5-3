document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add');
    const inputField = document.getElementById('input');
    const tasksList = document.getElementById('tasks-list');
    loadTasks();

    addButton.onclick = function() {
        let taskName = inputField.value.trim();
        
        if(taskName !== '') {
            addTask(taskName);
            saveTasks(); 
            inputField.value = ''; }
    };
    //add
    function addTask(taskName) {
        let listItem = document.createElement('li');
        listItem.textContent = taskName;

        tasksList.appendChild(listItem);
    }
    //save
    function saveTasks() {
        let tasksArray = Array.from(tasksList.children).map(li => li.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
    // load
    function loadTasks() {
        let tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
        tasksArray.forEach(task => {
            addTask(task);
        });
    }
});
