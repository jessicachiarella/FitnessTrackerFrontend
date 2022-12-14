import React, { useEffect } from "react";
import { getRoutines } from "../../api/index";
import CreateRoutine from "../CreateRoutine";
import EditRoutine from "../EditRoutine";
import DeleteRoutine from "../DeleteRoutine";
import "./MyRoutines.css";
import AddRoutineActivity from "../AddRoutineActivity";
import EditRoutineActivity from "../EditRoutineActivity";
import DeleteRoutineActivity from "../DeleteRoutineActivity";

const MyRoutines = ({
  username,
  loggedIn,
  allRoutines,
  setAllRoutines,
  allActivities,
  setAllActivities,
}) => {
  useEffect(() => {
    getRoutines().then((results) => {
      setAllRoutines(results);
    });
  }, []);

  if (loggedIn) {
    return (
      <div id="WelcomeToMyRoutinesMain">
        <div>
          <h1 id="WelcomeToMyRoutines">WELCOME TO MY ROUTINES</h1>
        </div>
        <CreateRoutine
          allRoutines={allRoutines}
          setAllRoutines={setAllRoutines}
        />
        {allRoutines.length ? (
          allRoutines.map((element) => {
            const { id, name, goal, creatorName, activities } = element;
            const routineId = id;
            if (creatorName === username) {
              return (
                <div key={routineId} className="routines">
                  <h2 id="Name">{name}</h2>
                  <p id="Goal">Goal: {goal}</p>
                  <p id="creatorName">Creator Name: {creatorName}</p>
                  <EditRoutine
                    routineId={routineId}
                    allRoutines={allRoutines}
                    setAllRoutines={setAllRoutines}
                  />
                  <div id="Activities">
                    {activities.length
                      ? activities.map((element) => {
                          const {
                            id,
                            name,
                            description,
                            count,
                            duration,
                            routineActivityId,
                          } = element;
                          const activityId = id;
                          const rAId = routineActivityId;
                          return (
                            <div key={activityId} className="activities">
                              <h4 id="activityName">Activity:{name}</h4>
                              <p id="Description">Description: {description}</p>
                              <p id="Count">Count: {count}</p>
                              <p id="Duration">Duration: {duration}</p>
                              <EditRoutineActivity
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                rAId={rAId}
                              />
                              <DeleteRoutineActivity
                                allActivities={allActivities}
                                setAllActivities={setAllActivities}
                                rAId={rAId}
                              />
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <AddRoutineActivity
                    routineId={routineId}
                    allActivities={allActivities}
                    setAllActivities={setAllActivities}
                  />
                  <DeleteRoutine
                    routineId={routineId}
                    setAllRoutines={setAllRoutines}
                  />
                </div>
              );
            }
          })
        ) : (
          <div> Loading your routines...</div>
        )}
      </div>
    );
  }
};

export default MyRoutines;
