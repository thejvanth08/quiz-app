function Question({ question, number }) {
  return (
    <h2 className="font-bold text-3xl sm:text-4xl text-white text-center">{number + 1}. {question}</h2>
  )
}
export default Question;