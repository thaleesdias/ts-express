interface Task {
    id:string,
    title:string,
    description:string,
    completed_at: null | string,
    created_at:string,
    updated_at:string
}
export class Database {
    #tasks:Task [] = []

    create(task:Task) {
        this.#tasks.push(task)

        console.log(this.#tasks)
    }
}