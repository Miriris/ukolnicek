console.log('funguju!');
/*task1 je test funkčnosti
const task1 = {
  name: 'Udělat domácí úkol do JS2',
  due: 'za 2 dny',
  done: false,
};
*/

const Task = ({ name, due, done }) => {
  // done ? '' : 'ok';

  return `<div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${done ? '✓' : ''}</div>
      </div>
      `;
};

const renderTasks = (tasks) => {
  const todoTasks = document.querySelector('.todo__tasks');
  todoTasks.innerHTML = tasks?.map((props) => Task(props));
};

fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
  .then((response) => response.json())
  .then((data) => renderTasks(data));

const checkUndone = document.querySelector('#checkbox-undone');
//console.log(checkUndone);

checkUndone.addEventListener('change', () => {
  if (checkUndone.checked) {
    fetch(
      'https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks?done=false',
    )
      .then((response) => response.json())
      .then(renderTasks);
  } else {
    fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks')
      .then((response) => response.json())
      .then(renderTasks);
  }
});
