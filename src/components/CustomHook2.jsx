import useLocalStorage from "../hooks/useLocalStorage";

function CustomHook2() {
  const [task, setTask] = useLocalStorage("key", {});
  return (
    <form className="w-25">
      <div className="mb-3">
        <label className="form-label">Task</label>
        <input
          className="form-control"
          type="text"
          name="text"
          id="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
    </form>
  );
}

export default CustomHook2;
