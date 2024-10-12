export interface Todo {
  id: string; // Assuming the ID is a string based on your resolver implementation
  label: string;
  isChecked: boolean;
  isSaving?: boolean; // Optional as it may not be set for all todos
  isDeleting?: boolean; // Optional as well
}
// Define Todos type
export type Todos = Todo[]; // Allows for the initial state to be null
