const [calculate, setCalculate] = useState("");
// const[sign,setSign]=useState('')

const solve = (a) => {
  setCalculate(calculate + a);
};
const result = () => {
  const output = eval(calculate);
  setCalculate(output);
  // console.log(output)
};
const Erase = () => {
  const deletedValue = calculate.slice(0, calculate.length - 1);

  setCalculate(deletedValue);
};
