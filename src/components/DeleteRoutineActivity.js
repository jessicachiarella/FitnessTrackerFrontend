import React from "react";
import { deleteRoutineActivity, getActivities } from "../api";
import "./DeleteRoutineActivity.css"

const DeleteRoutineActivity = ({ rAId, setAllActivities }) => {
  async function handleDelete(event) {
    event.preventDefault();
    await deleteRoutineActivity(rAId);
    const result = await getActivities();
    setAllActivities(result);
  }
  return (
    <form onSubmit={handleDelete}>
      <button id="DeleteActivityButton" type="Submit">
        DELETE ACTIVITY
      </button>
    </form>
  );
};

export default DeleteRoutineActivity;
