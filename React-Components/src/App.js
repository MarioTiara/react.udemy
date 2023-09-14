import ExerciseComponent from "./components/ExerciseComponent";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const date=new Date(2021,2,28)
  return (
    <ExpenseItem title='Car Insurance' price='$294.64' date={date}/>
  );
}

export default App;
