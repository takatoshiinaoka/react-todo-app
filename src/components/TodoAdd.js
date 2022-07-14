export const TodoAdd = ({ buttonText, inputEl, handleAddTodoListItem }) => {
    return (
      <>
        <textarea ref={inputEl} />
        <button onClick={handleAddTodoListItem}>{buttonText}</button>
      </>
    )
  }
  