import React, { useEffect, useState, Fragment } from "react";
import { invoke } from "@forge/bridge";

// Custom Styles
import {
  Card,
  Row,
  Icon,
  IconContainer,
  Status,
  SummaryActions,
  SummaryCount,
  SummaryFooter,
  ScrollContainer,
  Form,
  LoadingContainer,
} from "./LayoutComponents";

// Fuegokit
import {
  Box,
  AtlasButton,
  AtlasTextfield,
  AtlasCheckbox,
  AtlasLoadingButton,
  AtlasLozenge,
  Spinner,
} from "@fuegokit/react";
import { AkTrashIcon, AkEditorCloseIcon } from "@fuegokit/fuegoicons-react";

import type { Todo, Todos } from "./types";

const getUniqueId = () => "_" + Math.random().toString(36).substr(2, 9);

const TodosApp = () => {
  const [todos, setTodos] = useState<Todos>([]);
  const [input, setInput] = useState("");
  const [isFetched, setIsFetched] = useState(false);
  const [isDeleteAllShowing, setDeleteAllShowing] = useState(false);
  const [isDeletingAll, setDeletingAll] = useState(false);

  useEffect(() => {
    if (!isFetched) {
      setIsFetched(true);
      invoke("get-all").then((data) => setTodos(data as Todos));
    }
  }, [isFetched]);

  const createTodo = async (label: string) => {
    if (todos) {
      const newTodoList = [
        ...todos,
        { id: getUniqueId(), label, isChecked: false, isSaving: true },
      ];
      setTodos(newTodoList);
    }
  };

  const toggleTodo = (id: string) => {
    if (todos) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isChecked: !todo.isChecked, isSaving: true };
          }
          return todo;
        })
      );
    }
  };

  const deleteTodo = (id: string) => {
    if (todos) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, isDeleting: true };
          }
          return todo;
        })
      );
    }
  };

  const deleteAllTodos = async () => {
    setDeletingAll(true);
    await invoke("delete-all");
    setTodos([]);
    setDeleteAllShowing(false);
    setDeletingAll(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(input);
    setInput("");
  };

  useEffect(() => {
    if (!todos) return;
    if (!todos.find((todo) => todo.isSaving || todo.isDeleting)) return;

    Promise.all(
      todos.map((todo) => {
        if (todo.isSaving && !todo.id) {
          return invoke("create", { label: todo.label, isChecked: false });
        }
        if (todo.isSaving && todo.id) {
          return invoke("update", {
            id: todo.id,
            label: todo.label,
            isChecked: todo.isChecked,
          });
        }
        if (todo.isDeleting && todo.id) {
          return invoke("delete", { id: todo.id }).then(() => false);
        }
        return todo;
      })
    )
      .then((saved) => saved.filter((a): a is Todo => a !== false)) // Type guard
      .then(setTodos);
  }, [todos]);

  if (!todos) {
    return (
      <Card as="div">
        <LoadingContainer>
          <Spinner size="large" />
        </LoadingContainer>
      </Card>
    );
  }

  const completedCount = todos.filter((todo) => todo.isChecked).length;
  const totalCount = todos.length;

  const Rows = () => (
    <Fragment>
      {todos.map(({ id, label, isChecked, isSaving, isDeleting }, i) => {
        const isSpinnerShowing = isSaving || isDeleting;

        return (
          <Row isChecked={isChecked} key={`${label}-${i}`}>
            <AtlasCheckbox
              isChecked={isChecked}
              label={label}
              name={label}
              onChange={() => toggleTodo(id)}
            />
            <Status as="span">
              {isSpinnerShowing ? <Spinner size="medium" /> : null}
              {isChecked ? (
                <AtlasLozenge appearance="success">Done</AtlasLozenge>
              ) : null}
              <AtlasButton
                size="small"
                spacing="none"
                onClick={() => deleteTodo(id)}
              >
                <IconContainer>
                  <Icon>
                    <AkEditorCloseIcon />
                  </Icon>
                </IconContainer>
              </AtlasButton>
            </Status>
          </Row>
        );
      })}
    </Fragment>
  );

  const DeleteAll = () =>
    isDeleteAllShowing ? (
      <AtlasLoadingButton
        appearance="danger"
        spacing="compact"
        isLoading={isDeletingAll}
        isDisabled={isDeletingAll}
        onClick={deleteAllTodos}
      >
        Delete All
      </AtlasLoadingButton>
    ) : (
      <AtlasLoadingButton
        appearance="subtle"
        spacing="none"
        onClick={() => setDeleteAllShowing(true)}
      >
        <IconContainer>
          <Icon>
            <AkTrashIcon />
          </Icon>
        </IconContainer>
      </AtlasLoadingButton>
    );

  const CompletedLozenge = () => (
    <AtlasLozenge>
      {completedCount}/{totalCount} Completed
    </AtlasLozenge>
  );

  return (
    <Box sx={{ backgroundColor: "elevation.surface.default.[default]" }}>
      <Card>
        <ScrollContainer>
          <Rows />
          <Row isCompact>
            <Form onSubmit={onSubmit}>
              <AtlasTextfield
                appearance="subtle"
                placeholder="Add a todo +"
                value={input}
                onChange={(event) => {
                  const target = event.target as HTMLInputElement; // Type assertion
                  setInput(target.value);
                }}
              />
            </Form>
          </Row>
        </ScrollContainer>
        <SummaryFooter>
          <SummaryCount>
            <CompletedLozenge />
          </SummaryCount>
          <SummaryActions>
            <DeleteAll />
          </SummaryActions>
        </SummaryFooter>
      </Card>
    </Box>
  );
};

export default TodosApp;
