"use client";
import {
  Input,
  Button,
  Flex,
  Heading,
  IconButton,
  Checkbox,
  Text
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function Todo() {
  const [title, setTitle] = useState("");
  const [todos, setTodo] = useState([
    {
      todoText: "todo",
      completed: false,
    },
  ]);
  const onClickHandler = (elem: { todoText: string; completed: boolean }) => {
    console.log(elem);
    const newTodos: any = todos.map((todo) => {
      console.log(todo);
      if (todo.todoText == elem.todoText) {
        todo.completed = !todo.completed; // will reverse the order if true will turn into false bcz of NOT(!) operator

        
        return todo;
      }
      setTodo(newTodos);
    });
  };
  const addTodo = (title: string) => {
    if (title.trim()) {
      setTodo((prev) =>
        prev.concat({
          todoText: title,
          completed: false,
        })
      );

      setTitle("");
    } else alert("INPUT TASK!");
  };
  const deleteTodo = (title: string) => {
    setTodo((prev) => prev.filter((t) => t.todoText !== title));
  };
  return (
    <Flex
      bgColor={"skyblue"}
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction="column"
        p={9}
        w={600}
        rounded={9}
        m={7}
        backgroundColor={"gray.200"}
      >
        <Heading mb={6}>Todo </Heading>
        <Input
        bg={"azure"}
          placeholder="Input Task!"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          onClick={() => addTodo(title)}
          colorScheme="telegram"
          marginBlock={5}

        >
          Add
        </Button>
        
          {todos.map((elem) => {
            return (
              <Flex 
            
              marginBlock="4"
               justifyContent="space-between"
               gap={4}
                key={elem.todoText}
              >
                <Checkbox 
                  gap={2}
                  checked={elem.completed}
                  onClick={(e) => {
                    onClickHandler(elem);
                  }}
                >
                <Text noOfLines={1} maxWidth={380}>{elem.todoText}</Text>
                </Checkbox>
                <IconButton
             
                  aria-label="delete"
                  icon={<DeleteIcon />}
                  colorScheme="red"
                  onClick={() => deleteTodo(elem.todoText)}
                >
                  Delete
                </IconButton>
              </Flex>
            );
          })}
         { todos.length>1&&<Button colorScheme={"red"}w={20} h={8}  onClick={()=>setTodo([])}>Delete All</Button>}
        </Flex>
      </Flex>
   
  );
}
