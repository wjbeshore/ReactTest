import "./styles.css";
let name = "Will";
let style = {
  color: "Orange"
};

var d = new Date();
var n = d.getHours();
let time;
let tod = "AM";

if (n > 12) {
  time = n - 12;
  tod = "PM";
  style.color = "Blue";
}
export default function App() {
  return (
    <div className="App">
      <h1 className="heading">Test</h1>
      <h2 style={style}>The time is {time + " " + tod}</h2>
    </div>
  );
}
