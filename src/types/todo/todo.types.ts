export interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
export interface FilterFormData {
  search: string;
  status: string | boolean;
}

export interface TodoCardProps {
  todo: Todo;
  index: number;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, index: number) => void;
  onDragEnd?: () => void;
  isDragOver?: boolean;
}
