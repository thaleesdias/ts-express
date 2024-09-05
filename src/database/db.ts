import Task from '../interface/task'

export class Database {
    #tasks: Task[] = []

    list() {
        return this.#tasks
    }

    getTaskById(id: string) {
        const findTask = this.#tasks.find((task) => task.id === id)
        return findTask
    }

    create(task: Task) {

        this.#tasks.push(task)

    }

    update(id: string, newTask: Task) {

        this.#tasks.forEach((task) => {
            if (task.id === id) {
                task.id = newTask.id !== undefined ? newTask.id : task.id
                task.title = newTask.title !== undefined ? newTask.title : task.title
                task.description = newTask.id !== undefined ? newTask.description : task.description
                task.completed_at = newTask.id !== undefined ? newTask.completed_at : task.completed_at
                task.updated_at = new Date()
            }
        })
    }

    delete(id: string) {
        this.#tasks = this.#tasks.filter(task => task.id !== id)

    }

    deleteAll() {
        this.#tasks = []
    }
}