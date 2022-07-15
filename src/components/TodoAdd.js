import { Textarea, Button } from "@chakra-ui/react"

export const TodoAdd = ({ 
  placeholder,
  leftIcon, 
  buttonText, 
  inputEl, 
  handleAddTodoListItem 
}) => {
    return (
      <>
        <Textarea 
          placeholder={placeholder}
          pgColor="white"
          mt="8"
          borderColor="gray.400"
          ref={inputEl} 
        />
        <button 
          onClick={handleAddTodoListItem}
          colorScheme="blue"
          leftIcon={leftIcon}
          mt="8"
        >
          {buttonText}
        </button>
      </>
    )
  }
  