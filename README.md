UI Components

### Core Components
- **Button**: Multiple variants (primary, secondary, outline, danger)
- **Modal**: Reusable modal with backdrop
- **Typography**: Consistent text styling
- **Input**: Form inputs with validation
- **Select**: Dropdown selection component

### Todo Components
- **TodoCard**: Individual todo item with drag handle
- **TodoList**: Main todo list with filtering
- **AddTodoForm**: Form for creating new todos
- **FilterSection**: Todo filtering controls
- **TodoHeader**: App header with theme toggle

## Configuration

### Theme System
The app uses a custom theme system with CSS variables for consistent theming across components. Theme preferences are persisted in localStorage.

### API Integration
Built with Axios for HTTP requests, featuring:
- Request/response interceptors
- Error handling
- Loading states

### Form Validation
Uses React Hook Form with Zod schemas for:
- Input validation
- Error messages
- Form state management

## Performance Features

- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Builds**: Production-optimized builds
- **Efficient Re-renders**: Optimized component rendering
- **Caching**: React Query caching for better performance

##  Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Flexible layouts
- Touch-friendly interactions
- Optimized for all screen sizes

##  Development Best Practices

- TypeScript for type safety
- ESLint for code quality
- Component-based architecture
- Custom hooks for logic reuse
- Proper error boundaries
- Accessibility considerations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request
