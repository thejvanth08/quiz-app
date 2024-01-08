function Options({crt, inCrt, score, setScore}) {

  const options = inCrt;
  // to choose random index for inserting crt option
  let random = Math.floor(Math.random() * 4);
  // inserting crt option
  options.splice(random, 0, crt);

  return (
    <div className="mx-auto mt-8">
        {
            options.map((option, index) => {
                return (
                  <li
                    className="list-none bg-white min px-3 py-5 rounded-md text-pink-500 text-2xl mt-3 min-w-96 transition duration-100 hover:bg-pink-200 hover:font-semibold"
                    key={index}
                  >
                    <input
                      className="text-pink-400 font-bold"
                      type="radio"
                      name="option"
                      id={"id-" + index}
                    />
                    <label className="inline-block w-9/12 h-full pl-4" htmlFor={"id-" + index}>{option}</label>
                  </li>
                );
            })
        }
    </div>
  )
}
export default Options;