using orange.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace orange.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
