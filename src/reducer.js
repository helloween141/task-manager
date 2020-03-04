export default function(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          checked: false
        }
      ];

    case "toggle":
      return state.map(task => {
        if (task.id === action.payload) {
          task.checked = !task.checked;
        }
        return task;
      });

    case "remove":
      return state.filter(task => task.id !== action.payload);

    default:
      return state;
  }
}
